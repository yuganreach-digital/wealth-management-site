// 🔧 ANALYTICS CONFIGURATION
// This file controls all analytics implementation across the website
// Change ANALYTICS_ENABLED to true when client pays for analytics service

export const ANALYTICS_CONFIG = {
  // Set to false to disable ALL analytics (default for unpaid clients)
  ENABLED: false,
  
  // Google Analytics Configuration
  GOOGLE_ANALYTICS: {
    TRACKING_ID: "GA_TRACKING_ID", // Replace with actual ID when enabled
    CONSENT_MODE: true, // Enable consent mode for privacy compliance
  },
  
  // Google Tag Manager Configuration (optional)
  GOOGLE_TAG_MANAGER: {
    ENABLED: false, // Set to true if using GTM
    CONTAINER_ID: "GTM-XXXXXXX", // Replace with actual GTM ID
  },
  
  // Cookie Consent Configuration
  COOKIE_CONSENT: {
    ENABLED: true, // Always enabled for privacy compliance
    ANALYTICS_CATEGORY: "analytics", // Cookie category name
    MARKETING_CATEGORY: "marketing", // Cookie category name
  }
};

// Helper function to check if analytics is enabled
export const isAnalyticsEnabled = () => ANALYTICS_CONFIG.ENABLED;

// Helper function to get GA tracking ID
export const getGATrackingId = () => ANALYTICS_CONFIG.GOOGLE_ANALYTICS.TRACKING_ID;

// Helper function to check if GTM is enabled
export const isGTMEnabled = () => ANALYTICS_CONFIG.GOOGLE_TAG_MANAGER.ENABLED;
