
const fs = require('fs');

const filePath = 'utils/siteData.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find <h1>... </h1> where it is currently <h1>... </p>
// We use a non-greedy match [\s\S]*? to capture the content between <h1> and the first occurrence of </p>
// This assumes there are no nested <p> tags inside the <h1> which seems true for this file structure.
const regex = /(<h1[^>]*>[\s\S]*?)<\/p>/gi;

let matchCount = 0;
const newContent = content.replace(regex, (match, p1) => {
    matchCount++;
    return `${p1}</h1>`;
});

// Also check for the specific user request syntax if it was on a single line or specific style
// The user pattern: <h1 ...> ... </p>

fs.writeFileSync(filePath, newContent);
console.log(`Replaced ${matchCount} instances of mismatched <h1>... </p> with <h1>... </h1>`);
