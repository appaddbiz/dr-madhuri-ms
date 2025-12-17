
const fs = require('fs');

const filePath = 'utils/siteData.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// The bug in previous script might have caused <p> ... </p> to become <p> ... </h1> 
// IF there was an <h1> before it without a </p> or if the <h1>...</h1> block was correctly closed but my regex skipped it looking for </p>.

// My previous regex was `(<h1[^>]*>[\s\S]*?)<\/p>`. 
// If we had:
// <h1...>Title</h1>
// <p...>Description</p>
//
// The regex looks for <h1...> then scans until it sees </p>. It sees </h1> first, ignores it (since it's looking for </p>), then sees </p> at the end of Description.
// So it matches the WHOLE BLOCK and replaces the final </p> with </h1>.
// Result:
// <h1...>Title</h1>
// <p...>Description</h1>

// To fix this, we need to find <p ...> ... </h1> and revert it to </p>.
// Assumes <p> doesn't normally contain </h1> inside it.

const regex = /(<p[^>]*>[\s\S]*?)<\/h1>/gi;

let matchCount = 0;
const newContent = content.replace(regex, (match, p1) => {
    matchCount++;
    return `${p1}</p>`;
});

fs.writeFileSync(filePath, newContent);
console.log(`Replaced ${matchCount} instances of <p>... </h1> with <p>... </p>`);
