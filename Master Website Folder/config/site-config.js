// ═══════════════════════════════════════════════════════════════════
// HARDEX INDIA — SITE CONFIGURATION
// Update this file with accurate company information before going live.
// ═══════════════════════════════════════════════════════════════════

var SITE_CONFIG = {

  company: {
    name:       'Hardex India Private Limited',
    shortName:  'Hardex India',
    tagline:    'Green Chemistry · Construction Chemicals Since 1980',
    founded:    1980
  },

  contact: {
    phone:      '+91 96568 66699',
    phoneRaw:   '+919656866699',      // For tel: links — no spaces
    whatsapp:   '+919656866699',      // Update if different
    email:      'info@hardexindia.com',
    emailTech:  'info@hardexindia.com' // Technical support email (update if separate)
  },

  address: {
    street:     '',                   // TODO: Add street address
    city:       'Kochi',
    state:      'Kerala',
    pincode:    '',                   // TODO: Add pincode
    country:    'India',
    full:       'Kochi, Kerala, India' // Used in footer and contact page
  },

  hours: {
    weekdays:   'Monday – Saturday: 9:00 AM – 6:00 PM IST',
    sunday:     'Sunday: Closed'
  },

  social: {
    // Add your social handles here when ready
    // facebook: 'https://facebook.com/hardexindia',
    // linkedin:  'https://linkedin.com/company/hardexindia',
    // instagram: 'https://instagram.com/hardexindia',
    // youtube:   'https://youtube.com/@hardexindia'
  },

  seo: {
    siteName:   'Hardex India',
    domain:     'hardexindia.com',   // TODO: Update with actual domain
    locale:     'en_IN'
  }

};

// Export for Node.js (ignored in browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_CONFIG };
}
