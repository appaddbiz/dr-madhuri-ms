
const fs = require('fs');
const path = require('path');

const sitemapPath = 'app/sitemap/page.jsx';
const siteDataPath = 'utils/siteData.jsx';

// Function to extract links from sitemap/page.jsx
function extractSitemapLinks(content) {
  const links = [];
  const regex = /"link":\s*"(.*?)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      // Remove '/sitemap' prefix to compare with siteData
      let link = match[1];
      if (link.startsWith('/sitemap/')) {
          link = link.substring(8); // remove '/sitemap'
      }
      links.push(link);
  }
  return links;
}

// Function to extract links from utils/siteData.jsx
function extractSiteDataLinks(content) {
  const links = [];
  const regex = /link:\s*"(.*?)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].startsWith('http')) continue;
    
    // Normalize: remove trailing slashes if any (though usually not present in this file style)
    let link = match[1];
    if (link.endsWith('/') && link.length > 1) {
        link = link.slice(0, -1);
    }
    links.push(link);
  }
  return links;
}

try {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const siteDataContent = fs.readFileSync(siteDataPath, 'utf8');

  const sitemapLinks = extractSitemapLinks(sitemapContent);
  const siteDataLinks = extractSiteDataLinks(siteDataContent);

  const missingInSiteData = sitemapLinks.filter(link => !siteDataLinks.includes(link));
  const missingInSitemap = siteDataLinks.filter(link => !sitemapLinks.includes(link));

  // Determine mismatches (similar but not exact)
  // This is a bit subjective, but we can look for "similar" strings if needed.
  // For now, let's just output the lists.

  console.log("--- Report ---");
  console.log(`Usage in Sitemap: ${sitemapLinks.length} links`);
  console.log(`Entries in SiteData: ${siteDataLinks.length} links`);
  console.log("\n");

  if (missingInSiteData.length > 0) {
    console.log(`[!] Links in Sitemap but MISSING in SiteData (Need to be added/updated in siteData):`);
    // Group by location for clarity if possible, but here just listing
    missingInSiteData.forEach(l => console.log(`  - ${l}`));
  } else {
    console.log("[+] All sitemap links exist in SiteData.");
  }

  console.log("\n");

  if (missingInSitemap.length > 0) {
    console.log(`[!] Links in SiteData but NOT in Sitemap (May be old/unused or separate pages):`);
    // Showing first 20 if too many
    if (missingInSitemap.length > 20) {
        missingInSitemap.slice(0, 20).forEach(l => console.log(`  - ${l}`));
        console.log(`  ... and ${missingInSitemap.length - 20} more.`);
    } else {
        missingInSitemap.forEach(l => console.log(`  - ${l}`));
    }
  } else {
      console.log("[+] All SiteData entries are used in Sitemap.");
  }

} catch (err) {
  console.error("Error reading files:", err);
}
