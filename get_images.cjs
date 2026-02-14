const https = require('https');

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function getOgImage(url) {
  try {
    const html = await fetchUrl(url);
    const match = html.match(/property="og:image" content="([^"]+)"/);
    return match ? match[1] : null;
  } catch (e) {
    console.error(`Error fetching ${url}:`, e.message);
    return null;
  }
}

async function findXboxImage() {
  try {
    const html = await fetchUrl("https://unsplash.com/s/photos/xbox-series-x");
    // Find first photo link, e.g. /photos/ID
    const match = html.match(/href="(\/photos\/[^"]+)"/);
    if (match) {
      const photoUrl = "https://unsplash.com" + match[1];
      console.log(`Found Xbox Photo Page: ${photoUrl}`);
      return await getOgImage(photoUrl);
    }
  } catch (e) {
    console.error("Error finding Xbox image:", e.message);
  }
  return null;
}

(async () => {
  console.log("Steam Deck:", await getOgImage("https://unsplash.com/photos/1YdquFKt7NU"));
  console.log("Laptop:", await getOgImage("https://unsplash.com/photos/TWcT7gG59js"));
  console.log("VR:", await getOgImage("https://unsplash.com/photos/4lSz1Jv0Vkc"));
  console.log("Xbox:", await findXboxImage());
})();
