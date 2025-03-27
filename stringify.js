const fs = require('fs');

// Sample HTML content
const sampleHTML = ``;

// ✅ Convert HTML to JSON-safe format (Escaping properly)
const stringifiedHTML = JSON.stringify(sampleHTML);

// Save it to a text file (Optional, if you want to store it)
fs.writeFileSync("stringifiedHtml.txt", stringifiedHTML, "utf8");

console.log("✅ Stringified HTML:\n", stringifiedHTML);
console.log("\n✅ Copy and paste this into DMN in FormsFlow.io");
