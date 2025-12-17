
const fs = require('fs');

const content = fs.readFileSync('utils/siteData.jsx', 'utf8');
const entries = [];
const regex = /id:\s*(\d+),\s*title:\s*"(.*?)",[\s\S]*?link:\s*"(.*?)"/g;
let match;

while ((match = regex.exec(content)) !== null) {
    if (match[2].toLowerCase().includes('labour')) {
        entries.push({ id: match[1], title: match[2], link: match[3] });
    }
}

console.log(JSON.stringify(entries, null, 2));
