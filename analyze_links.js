
const fs = require('fs');

const sitemapPath = 'app/sitemap/page.jsx';
const siteDataPath = 'utils/siteData.jsx';

function extractSitemapLinks(content) {
  const links = [];
  const regex = /"link":\s*"(.*?)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      let link = match[1];
      if (link.startsWith('/sitemap/')) {
          link = link.substring(8); 
      }
      links.push(link);
  }
  return links;
}

function extractSiteDataLinks(content) {
  const links = [];
  const regex = /link:\s*"(.*?)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].startsWith('http')) continue;
    let link = match[1];
    if (link.endsWith('/') && link.length > 1) {
        link = link.slice(0, -1);
    }
    links.push(link);
  }
  return links;
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const siteDataContent = fs.readFileSync(siteDataPath, 'utf8');

const sitemapLinks = extractSitemapLinks(sitemapContent);
const siteDataLinks = extractSiteDataLinks(siteDataContent);

// Filter out Byrasandra from sitemap links if they were commented out?
// My extract function regex WILL match commented out lines if they look like "link": "..."
// I should verify if I want to match them. 
// User wants to match files. If Byrasandra is commented out in code, it's effectively not in the "Active" sitemap, 
// but it is in the file. 
// For now, let's look at all links found.

const missingInSiteData = sitemapLinks.filter(l => !siteDataLinks.includes(l));
const missingInSitemap = siteDataLinks.filter(l => !sitemapLinks.includes(l));

const result = {
    sitemapCount: sitemapLinks.length,
    siteDataCount: siteDataLinks.length,
    missingInSiteData: missingInSiteData,
    missingInSitemap: missingInSitemap.slice(0, 50) // Cap to avoid huge file if many
};

fs.writeFileSync('link_analysis.json', JSON.stringify(result, null, 2));
