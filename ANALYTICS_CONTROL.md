# Analytics Control System

## 🔧 Quick Analytics Toggle

To enable/disable ALL analytics across the website, simply change ONE variable:

### File: `src/config/analytics.ts`

```typescript
export const ANALYTICS_CONFIG = {
  // 🔥 CHANGE THIS TO TRUE WHEN CLIENT PAYS FOR ANALYTICS SERVICE
  ENABLED: false,  // ← Set to true to enable analytics
  
  GOOGLE_ANALYTICS: {
    TRACKING_ID: "GA_TRACKING_ID", // Replace with actual ID
  },
  // ... rest of config
};
```

## How It Works

### When `ENABLED: false` (Default - No Payment)
- ❌ No Google Analytics scripts loaded
- ❌ No tracking code executed
- ❌ No data collection
- ✅ Cookie consent banner still works (for privacy compliance)
- ✅ Website functions normally

### When `ENABLED: true` (Client Paid)
- ✅ Google Analytics scripts loaded
- ✅ Consent mode enabled
- ✅ Tracking works with user consent
- ✅ Cookie consent banner controls analytics

## Client Payment Workflow

1. **Before Payment**: `ENABLED: false` (default)
2. **Client Pays**: Change `ENABLED: true`
3. **Add Tracking ID**: Replace `"GA_TRACKING_ID"` with actual ID
4. **Deploy**: Analytics automatically enabled

## Files Affected

- `src/config/analytics.ts` - Main configuration
- `src/layouts/BaseLayout.astro` - Analytics scripts
- `src/components/CookieConsent.astro` - Consent management

## Benefits

- ✅ **Single Point Control** - One variable controls everything
- ✅ **No Code Duplication** - Clean, maintainable code
- ✅ **Privacy Compliant** - Cookie consent still works
- ✅ **Easy Deployment** - Simple true/false toggle
- ✅ **Client Friendly** - Clear payment-based activation

## Testing

- **Analytics Disabled**: Check browser dev tools - no GA scripts loaded
- **Analytics Enabled**: Check browser dev tools - GA scripts present
- **Cookie Consent**: Always works regardless of analytics status
