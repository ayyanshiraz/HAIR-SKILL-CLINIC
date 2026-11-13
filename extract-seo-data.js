const fs = require("fs");
const path = require("path");

const outputFile = path.join(__dirname, "claude-seo-audit.txt");

// Folders containing content, pages, components, and SEO logic
const targetDirs = ["src/app", "src/components", "src/lib", "src/data"];

// Specific SEO-related files at the root level
const rootFiles = ["next.config.ts", "redirects.ts", "middleware.ts"];

// Only include these file types
const allowedExtensions = [".tsx", ".ts", ".md", ".mdx"];

// Skip heavy or irrelevant folders explicitly
const skipDirs = ["node_modules", ".next", "public", ".git"];

let combinedContent = "=== NEXT.JS SEO AND CONTENT AUDIT FILE ===\n\n";

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!skipDirs.includes(item)) {
        scanDirectory(fullPath);
      }
    } else {
      const ext = path.extname(item);
      if (allowedExtensions.includes(ext)) {
        const content = fs.readFileSync(fullPath, "utf-8");
        combinedContent += `\n\n--- FILE START: ${fullPath} ---\n`;
        combinedContent += content;
        combinedContent += `\n--- FILE END: ${fullPath} ---\n`;
      }
    }
  }
}

// Process all target folders
for (const dir of targetDirs) {
  scanDirectory(path.join(__dirname, dir));
}

// Process specific root files
for (const file of rootFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, "utf-8");
    combinedContent += `\n\n--- FILE START: ${fullPath} ---\n`;
    combinedContent += content;
    combinedContent += `\n--- FILE END: ${fullPath} ---\n`;
  }
}

fs.writeFileSync(outputFile, combinedContent, "utf-8");
console.log("Extraction complete! File saved as: claude-seo-audit.txt");