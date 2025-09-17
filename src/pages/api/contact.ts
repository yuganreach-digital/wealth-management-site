import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phone, netWorth, services, message } = formData;
    
    if (!firstName || !lastName || !email) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: import.meta.env.GMAIL_USER, // Your Gmail address
        pass: import.meta.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Format services array
    const servicesList = Array.isArray(services) ? services.join(', ') : services || 'None selected';
    
    // Format net worth range
    const netWorthLabels: { [key: string]: string } = {
      'under-1m': 'Less than $1M',
      '1-5m': '$1M - $5M',
      '5-10m': '$5M - $10M',
      '10-25m': '$10M - $25M',
      '25-50m': '$25M - $50M',
      '50m+': '$50M+'
    };
    
    const netWorthLabel = netWorthLabels[netWorth] || netWorth || 'Not specified';

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Avita Family Office Services</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e3a8a; margin-top: 0; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Contact Information
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Net Worth:</td>
              <td style="padding: 8px 0; color: #6b7280;">${netWorthLabel}</td>
            </tr>
          </table>
          
          <h3 style="color: #1e3a8a; margin-top: 25px; margin-bottom: 15px;">Services of Interest</h3>
          <p style="color: #6b7280; background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 0;">
            ${servicesList}
          </p>
          
          ${message ? `
            <h3 style="color: #1e3a8a; margin-top: 25px; margin-bottom: 15px;">Message</h3>
            <div style="color: #6b7280; background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 14px;">
            <p>This message was sent from the Avita Family Office Services contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/Toronto',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: import.meta.env.GMAIL_USER,
      to: import.meta.env.CONTACT_EMAIL || import.meta.env.GMAIL_USER, // You can set a different recipient email
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
      text: `
New Contact Form Submission from ${firstName} ${lastName}

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Net Worth: ${netWorthLabel}

Services of Interest: ${servicesList}

${message ? `Message: ${message}` : ''}

Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })}
      `.trim()
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email sent successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
