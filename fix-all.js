const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function fixFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);

    let updatedCount = 0;

    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') && file !== 'ConsultationForm.tsx') {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // Check agar file mein form mojood hai
            if (content.includes('GET FREE CONSULTATION')) {
                
                // 1. Purana lamba HTML form replace karna
                const formRegex = /<div className="bg-\[\#772424\][^>]*>[\s\S]*?GET FREE CONSULTATION[\s\S]*?<\/form>\s*<\/div>/g;
                content = content.replace(formRegex, '<ConsultationForm />');

                // 2. Faltu states aur functions delete karna
                const stateRegex = /const defaultCountry = countries\.find[\s\S]*?window\.open\(whatsappUrl, "_blank"\);\n\s*};\n/g;
                content = content.replace(stateRegex, '');

                // 3. Purani countries ki import delete karna
                const countriesImportRegex = /import \{ countries(?:, type Country)? \} from "\.\.\/data\/countries";\n?/g;
                content = content.replace(countriesImportRegex, '');

                // 4. Naya ConsultationForm import karna (agar pehle se nahi hai)
                if (!content.includes('import ConsultationForm')) {
                    const importStatement = `\nimport dynamic from "next/dynamic";\nconst ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });\n`;
                    const lastImportIndex = content.lastIndexOf('import ');
                    if (lastImportIndex !== -1) {
                        const endOfLastImport = content.indexOf('\n', lastImportIndex);
                        content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
                    } else {
                        content = importStatement + content;
                    }
                }
                
                fs.writeFileSync(fullPath, content, 'utf-8');
                console.log(`✅ Fixed: ${file}`);
                updatedCount++;
            }
        }
    }
    return updatedCount;
}

console.log("🚀 Starting automatic form replacement...");
const total = fixFiles(componentsDir);
console.log(`🎉 Done! Successfully updated ${total} files in 1 second!`);