const fs = require("fs");
const path = require("path");

async function generateUltraRichLLMS() {
  try {
    // English comment: Define the rich context for AI search engines
    const coreContent = `# Hair Skill Clinic - Master Knowledge Base\n
> Hair Skill is a premium hair restoration and transplant clinic in Lahore, Pakistan. It is led by Dr. Mansoor Ahmad, a distinguished surgeon with 40 years of operative experience. The clinic strictly follows ISHRS guidelines and focuses on high-quality, surgeon-led procedures, avoiding technician-led black-market surgeries.\n
## Core Expertise and Medical Authority
- **Dr. Mansoor Ahmad:** 40 years of surgical experience, ensuring 90 to 95 percent graft survival rates.
- **Surgical Safety:** All recipient site incisions and non-delegable surgical acts are performed exclusively by the licensed surgeon, not technicians.
- **Transparent Pricing:** Cost varies from PKR 50,000 to PKR 400,000 based on grafts and technique. No hidden fees.\n
## Complete Site Directory with Meta Context\n
> Below is the complete directory of pages, including exact meta titles and descriptions so AI engines can route queries accurately.\n\n`;

    // English comment: Fetch sitemap to append all URLs dynamically
    const sitemapUrl = "https://www.hairskill.com/sitemap.xml";
    console.log("Fetching sitemap from " + sitemapUrl + " ...");
    
    const response = await fetch(sitemapUrl);
    const xmlText = await response.text();

    // English comment: Extract all URLs from loc tags using Regex
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls = [];

    while ((match = regex.exec(xmlText)) !== null) {
      urls.push(match[1]);
    }

    console.log("Found " + urls.length + " URLs. Now fetching Meta Titles and Descriptions... (Please wait a minute as it scrapes the live site)");

    let linkList = "";

    // English comment: Loop through each URL to scrape the meta title and description
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      console.log("[" + (i + 1) + "/" + urls.length + "] Extracting SEO data from: " + url);
      
      try {
        const pageRes = await fetch(url);
        const html = await pageRes.text();
        
        // English comment: Extract Meta Title
        const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].replace(/&amp;/g, "&").trim() : "Hair Skill Page";
        
        // English comment: Extract Meta Description (handling different attribute orders)
        let descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["'][^>]*>/i);
        if (!descMatch) {
            descMatch = html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["'][^>]*>/i);
        }
        const desc = descMatch ? descMatch[1].replace(/&amp;/g, "&").trim() : "Comprehensive details about hair restoration services provided by Hair Skill.";
        
        // English comment: Format for the LLM
        linkList += `### ${title}\n`;
        linkList += `- **URL:** ${url}\n`;
        linkList += `- **Page Summary:** ${desc}\n\n`;
        
      } catch (err) {
        console.log("Failed to fetch metadata for " + url + ", using fallback.");
        linkList += `### Hair Skill Page\n- **URL:** ${url}\n- **Page Summary:** Information regarding hair transplants and treatments at Hair Skill clinic.\n\n`;
      }
    }

    // English comment: Combine the rich text content with the dynamic links
    const finalMarkdown = coreContent + linkList;

    // English comment: Ensure public directory exists before writing
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log("Created public directory.");
    }

    // English comment: Save the file to the public folder
    const filePath = path.join(publicDir, "llms.txt");
    fs.writeFileSync(filePath, finalMarkdown);
    
    console.log("\nSuccess! Ultra-Rich GEO llms.txt with Meta Titles and Descriptions has been generated perfectly.");
  } catch (error) {
    console.error("Error creating llms.txt:", error);
  }
}

generateUltraRichLLMS();