const fs = require('fs');

const filePath = 'utils/siteData.jsx';
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Look for lines that have </p> and check if there's an unclosed <h1> before it
    if (line.includes('</p>')) {
        // Check backwards to see if there's an <h1> without </h1>
        let foundH1 = false;
        let foundH1Close = false;
        
        for (let j = i; j >= Math.max(0, i - 10); j--) {
            if (lines[j].includes('</h1>')) {
                foundH1Close = true;
                break;
            }
            if (lines[j].includes('<h1')) {
                foundH1 = true;
                break;
            }
        }
        
        // If we found <h1> but no </h1>, this </p> should be </h1>
        if (foundH1 && !foundH1Close) {
            lines[i] = line.replace('</p>', '</h1>');
            fixedCount++;
        }
    }
}

const newContent = lines.join('\n');
fs.writeFileSync(filePath, newContent);
console.log(`Fixed ${fixedCount} instances of <h1> closed with </p>`);
