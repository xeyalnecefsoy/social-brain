const fs = require('fs');
const path = 'c:\\Users\\KhayalTurkic\\Desktop\\social-brain\\public\\175 Good, Clean Jokes That\'ll Make You Laugh - Parade.htm';

try {
  const content = fs.readFileSync(path, 'utf8');
  // Simple regex to find list items or paragraphs that might be jokes
  // Looking for patterns like "1. Joke text" or text inside <li>
  
  // Try to find numbered lists like "1. Joke..."
  // Since it's HTML, it might be ">1. " or " 1. "
  const regex = />\s*\d+\.\s*(.*?)</g;
  let m;
  let count = 0;
  while ((m = regex.exec(content)) !== null) {
      if (m[1].length > 10) { // Filter out short matches
          console.log("Setup: " + m[1]);
          // Get the index of the match and print characters after it
          const endIndex = m.index + m[0].length;
          const nextText = content.substring(endIndex, endIndex + 300);
          console.log("Context: " + nextText.replace(/\n/g, ' '));
          count++;
          if (count > 50) break;
      }
  }

  if (count < 10) {
      console.log("Searching for 'Why did'...");
      const whyRegex = />(Why did.*?)<\/p>/g;
      while ((m = whyRegex.exec(content)) !== null) {
          console.log("Setup: " + m[1]);
          const endIndex = m.index + m[0].length;
          const nextText = content.substring(endIndex, endIndex + 300);
          console.log("Context: " + nextText.replace(/\n/g, ' '));
          count++;
          if (count > 50) break;
      }
  }
} catch (e) {
  console.error(e);
}
