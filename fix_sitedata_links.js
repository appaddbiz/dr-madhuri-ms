
const fs = require('fs');

const siteDataPath = 'utils/siteData.jsx';
let content = fs.readFileSync(siteDataPath, 'utf8');

// Replacements map
// These targets match common differences found in the analysis
const replacements = [
  // Remove parens around gdm, iui, tlh, pih
  { regex: /link: "(.*?)(\(gdm\))(.*?)"/g, replace: (m, p1, p2, p3) => `link: "${p1}gdm${p3}"` },
  { regex: /link: "(.*?)(\(iui\))(.*?)"/g, replace: (m, p1, p2, p3) => `link: "${p1}iui${p3}"` },
  { regex: /link: "(.*?)(\(tlh\))(.*?)"/g, replace: (m, p1, p2, p3) => `link: "${p1}tlh${p3}"` },
  { regex: /link: "(.*?)(\(pih\))(.*?)"/g, replace: (m, p1, p2, p3) => `link: "${p1}pih${p3}"` },
  
  // Specific wording fixes
  { regex: /labour-postnatal/g, replace: 'labour-and-postnatal' },
  { regex: /laparoscopy-hysteroscopy/g, replace: 'laparoscopy-&-hysteroscopy' },
  { regex: /gynaecologist/g, replace: 'gynecologist' },
  
  // Fix missing 'in' for tavarekere maternity clinic
  // Target specifically the link part to avoid changing text if any (though text usually fine)
  { regex: /link: "\/best-maternity-clinic-tavarekere-main-road"/g, replace: 'link: "/best-maternity-clinic-in-tavarekere-main-road"' }
];

let newContent = content;

// Apply regex based replacements
// Note: Simple regex on the whole file for the string-based ones
// For specific link structures, we iterate or use global regex.

// 1. Parens removal
newContent = newContent.replace(/link:\s*"(.*?)\((gdm|iui|tlh|pih)\)(.*?)"/gi, (match, p1, p2, p3) => {
    return `link: "${p1}${p2}${p3}"`;
});

// 2. Wording fixes in Links ONLY
// We should match `link: "..."` to be safe, but global replace of `labour-postnatal` in a slug is likely safe.
// Let's be safer: match the link string.
newContent = newContent.replace(/link:\s*"(.*?)"/g, (match, linkUrl) => {
    let newLink = linkUrl;
    
    // labour-postnatal -> labour-and-postnatal
    if (newLink.includes('labour-postnatal')) {
        newLink = newLink.replace('labour-postnatal', 'labour-and-postnatal');
    }
    
    // laparoscopy-hysteroscopy -> laparoscopy-&-hysteroscopy
    if (newLink.includes('laparoscopy-hysteroscopy')) {
        newLink = newLink.replace('laparoscopy-hysteroscopy', 'laparoscopy-&-hysteroscopy');
    }
    
    // gynaecologist -> gynecologist
    if (newLink.includes('gynaecologist')) {
        newLink = newLink.replace('gynaecologist', 'gynecologist');
    }
    
    // best-maternity-clinic-tavarekere -> best-maternity-clinic-in-tavarekere
    // Check if it's missing 'in'
    if (newLink.includes('/best-maternity-clinic-tavarekere')) {
         newLink = newLink.replace('/best-maternity-clinic-tavarekere', '/best-maternity-clinic-in-tavarekere');
    }
    
    return `link: "${newLink}"`;
});

// Write result
fs.writeFileSync(siteDataPath, newContent);
console.log("Updated siteData.jsx links.");
