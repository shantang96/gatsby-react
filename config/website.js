const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'The Demo Website', // Navigation and Site Title
  siteTitleAlt: 'Demo', // Alternative Site title for SEO
  siteTitleShort: 'Demo', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazingly fast websites using Gatsby', // Headline for schema.org JSONLD
  siteUrl: 'https://google.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'ShantanuGupta', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@', // Twitter Username
  ogSiteName: 'shantanugupta96', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
