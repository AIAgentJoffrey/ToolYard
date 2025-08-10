/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://toolyard.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
module.exports = config;