# Email Setup Guide for Contact Form

This guide will help you set up email functionality for your contact form using Gmail SMTP.

## Prerequisites

1. A Gmail account
2. 2-Step Verification enabled on your Google account

## Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the setup process to enable 2-Step Verification

## Step 2: Generate App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Enter "Wealth Management Site" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Create Environment File

1. Copy the `env.example` file to `.env` in your project root:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your actual credentials:
   ```env
   # Your Gmail address
   GMAIL_USER=your-email@gmail.com
   
   # The 16-character app password from Step 2
   GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   
   # Email where contact form submissions will be sent
   # (can be the same as GMAIL_USER or different)
   CONTACT_EMAIL=your-email@gmail.com
   ```

## Step 4: Test the Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Go to your contact page and submit the form
3. Check your email for the contact form submission

## Features

- **Professional Email Template**: Form submissions are sent as beautifully formatted HTML emails
- **Complete Form Data**: Includes all form fields (name, email, phone, net worth, services, message)
- **Reply-To**: You can reply directly to the person who submitted the form
- **Error Handling**: Proper error messages if email sending fails
- **User Feedback**: Success/error messages shown to users after form submission

## Email Content

The email includes:
- Contact information (name, email, phone, net worth range)
- Selected services of interest
- User's message
- Timestamp of submission
- Professional formatting with your brand colors

## Troubleshooting

### "Invalid login" error
- Make sure you're using the App Password, not your regular Gmail password
- Ensure 2-Step Verification is enabled
- Check that the App Password is correct (16 characters, no spaces)

### "Less secure app access" error
- This shouldn't happen with App Passwords, but if it does, make sure you're using the App Password correctly

### Emails not being received
- Check your spam folder
- Verify the CONTACT_EMAIL address is correct
- Check the browser console for any error messages

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- App Passwords are more secure than regular passwords
- Each App Password can be revoked individually if compromised

## Production Deployment

When deploying to production:
1. Set the environment variables in your hosting platform
2. Never hardcode credentials in your code
3. Consider using a dedicated email service like SendGrid or Mailgun for higher volume

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Check Gmail's security settings
