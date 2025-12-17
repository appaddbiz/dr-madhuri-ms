const fs = require('fs');

const content = fs.readFileSync('utils/siteData.jsx', 'utf8');
const lines = content.split('\n');

const issues = [];
let inH1 = false;
let h1StartLine = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<h1')) {
        inH1 = true;
        h1StartLine = i + 1;
    }
    
    if (inH1 && line.includes('</p>')) {
        issues.push({
            line: i + 1,
            h1Start: h1StartLine,
            content: lines[i].trim()
        });
        inH1 = false;
    }
    
    if (inH1 && line.includes('</h1>')) {
        inH1 = false;
    }
}

console.log(`Found ${issues.length} instances where <h1> is closed with </p>`);
console.log('\nFirst 10 instances:');
issues.slice(0, 10).forEach(issue => {
    console.log(`Line ${issue.line} (h1 started at ${issue.h1Start}): ${issue.content}`);
});
