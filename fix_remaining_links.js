const fs = require('fs');

const siteDataPath = 'utils/siteData.jsx';
let content = fs.readFileSync(siteDataPath, 'utf8');

// Fix the remaining link issues in siteData
const fixes = [
  // Add missing "in" to best-maternity-clinic
  { 
    from: 'link: "/best-maternity-clinic-tavarekere-main-road"', 
    to: 'link: "/best-maternity-clinic-in-tavarekere-main-road"' 
  },
  // Fix gynaecologist to gynecologist
  { 
    from: 'link: "/best-gynaecologist-in-tavarekere-main-road"', 
    to: 'link: "/best-gynecologist-in-tavarekere-main-road"' 
  },
  // Add & to laparoscopy-hysteroscopy links
  { 
    from: 'link: "/laparoscopy-hysteroscopy-in-tavarekere-main-road"', 
    to: 'link: "/laparoscopy-&-hysteroscopy-in-tavarekere-main-road"' 
  },
  { 
    from: 'link: "/laparoscopy-hysteroscopy-in-jayanagar-7th-block"', 
    to: 'link: "/laparoscopy-&-hysteroscopy-in-jayanagar-7th-block"' 
  },
  { 
    from: 'link: "/laparoscopy-hysteroscopy-in-jayanagar"', 
    to: 'link: "/laparoscopy-&-hysteroscopy-in-jayanagar"' 
  }
];

let fixCount = 0;
fixes.forEach(fix => {
  if (content.includes(fix.from)) {
    content = content.replace(fix.from, fix.to);
    fixCount++;
    console.log(`Fixed: ${fix.from} -> ${fix.to}`);
  }
});

fs.writeFileSync(siteDataPath, content);
console.log(`\nTotal fixes applied: ${fixCount}`);
