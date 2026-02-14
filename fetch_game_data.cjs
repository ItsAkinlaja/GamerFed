const https = require('https');
const fs = require('fs');

// Game list with manual category corrections and search terms
const gamesList = [
  // ADVENTURE / ACTION
  { name: "Uncharted: Legacy of Thieves Collection", category: "Adventure" },
  { name: "Red Dead Redemption 2", category: "Adventure" },
  { name: "Days Gone", category: "Adventure" },
  { name: "Mafia: Definitive Edition", category: "Adventure" },
  { name: "Black Myth: Wukong", category: "Adventure" },
  { name: "Mafia II: Definitive Edition", category: "Adventure" },
  { name: "Watch_Dogs 2", category: "Adventure" },
  { name: "Mafia III: Definitive Edition", category: "Adventure" },
  { name: "Watch_Dogs", category: "Adventure" },
  { name: "Grand Theft Auto V", category: "Adventure" },
  { name: "Ryse: Son of Rome", category: "Adventure" },
  { name: "Grand Theft Auto IV: The Complete Edition", category: "Adventure" },
  { name: "God of War Ragnarök", search: "God of War", category: "Adventure" }, // Ragnarok might not be on Steam yet, fallback to GoW
  { name: "Horizon Forbidden West Complete Edition", category: "Adventure" },
  { name: "The Last of Us Part I", category: "Adventure" },
  { name: "Marvel's Spider-Man Remastered", category: "Adventure" }, // Spiderman 2 not on PC yet
  { name: "Ghost of Tsushima DIRECTOR'S CUT", category: "Adventure" },
  { name: "Assassin's Creed Mirage", category: "Adventure" },
  { name: "Sleeping Dogs: Definitive Edition", category: "Adventure" },
  { name: "Control Ultimate Edition", category: "Adventure" },
  { name: "A Plague Tale: Requiem", category: "Adventure" },
  { name: "Mad Max", category: "Adventure" },
  { name: "Gotham Knights", category: "Adventure" },
  { name: "Saints Row", category: "Adventure" },
  { name: "Star Wars Jedi: Survivor", category: "Adventure" },

  // SHOOTING
  { name: "Max Payne 3", category: "Shooting" },
  { name: "Warhammer 40,000: Space Marine 2", category: "Shooting" },
  { name: "High On Life", category: "Shooting" },
  { name: "Tom Clancy's Splinter Cell Blacklist", category: "Shooting" },
  { name: "Tom Clancy's Rainbow Six Siege", category: "Shooting" },
  { name: "Call of Duty: Modern Warfare", category: "Shooting" },
  { name: "Call of Duty: Black Ops III", category: "Shooting" },
  { name: "Call of Duty: Modern Warfare II", category: "Shooting" },
  { name: "Call of Duty: Black Ops 6", category: "Shooting" },
  { name: "Call of Duty: Modern Warfare III", category: "Shooting" },
  { name: "Call of Duty: WWII", category: "Shooting" },
  { name: "Call of Duty: Black Ops Cold War", category: "Shooting" },
  { name: "Call of Duty: Advanced Warfare", category: "Shooting" },
  { name: "Call of Duty: Ghosts", category: "Shooting" },
  { name: "Call of Duty: Infinite Warfare", category: "Shooting" },
  { name: "Call of Duty: Black Ops", category: "Shooting" },
  { name: "Call of Duty: Black Ops II", category: "Shooting" },
  { name: "Gears 5", category: "Shooting" },
  { name: "Deathloop", category: "Shooting" },
  { name: "DOOM Eternal", category: "Shooting" },
  { name: "RoboCop: Rogue City", category: "Shooting" },
  { name: "Homefront: The Revolution", category: "Shooting" },
  { name: "Wolfenstein II: The New Colossus", category: "Shooting" },
  { name: "Sniper Elite 5", category: "Shooting" },

  // SPORTS
  { name: "EA SPORTS FC 25", category: "Sports" },
  { name: "FIFA 23", category: "Sports" },
  { name: "NBA 2K24", category: "Sports" },
  { name: "F1 24", category: "Sports" },
  { name: "Ride 5", category: "Sports" },
  { name: "eFootball 2024", category: "Sports" },
  { name: "Football Manager 2024", category: "Sports" },
  { name: "Riders Republic", category: "Sports" },

  // RPG / OTHERS
  { name: "Dragon Age: The Veilguard", category: "RPG" },
  { name: "Evil West", category: "RPG" },
  { name: "Tekken 8", category: "Fighting" },
  { name: "Injustice 2", category: "Fighting" },
  { name: "The Elder Scrolls V: Skyrim Special Edition", category: "RPG" },
  { name: "Mortal Kombat 1", category: "Fighting" },
  { name: "Cyberpunk 2077", category: "RPG" },
  { name: "The Witcher 3: Wild Hunt", category: "RPG" },
  { name: "Ninja Gaiden: Master Collection", category: "Action" },
  { name: "Resident Evil 4", category: "Horror" },
  { name: "Sekiro: Shadows Die Twice", category: "Action" },
  { name: "Ratchet & Clank: Rift Apart", category: "Adventure" },
  { name: "Yakuza: Like a Dragon", category: "RPG" },
  { name: "Forspoken", category: "RPG" },
  { name: "Devil May Cry 5", category: "Action" },
  { name: "Lies of P", category: "RPG" }
];

const fetchGameData = (gameObj) => {
  return new Promise((resolve) => {
    const searchTerm = gameObj.search || gameObj.name;
    const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(searchTerm)}&l=english&cc=US`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.items && json.items.length > 0) {
            const item = json.items[0];
            // Price conversion: USD * 1000 (approx NGN rate)
            // item.price.final is in cents. So $60.00 = 6000. 6000/100 = 60. 60 * 1000 = 60000.
            const priceInNgn = item.price ? (item.price.final / 100) * 1000 : 45000; 
            
            resolve({
              name: gameObj.name, // Use our clean name
              foundName: item.name,
              id: 0, // Placeholder, will assign later
              price: Math.round(priceInNgn / 1000) * 1000, // Round to nearest 1000
              image: item.tiny_image ? item.tiny_image.replace('capsule_sm_120', 'header') : "https://via.placeholder.com/300x450?text=Game+Image",
              category: gameObj.category,
              description: "Experience one of the best games in the " + gameObj.category + " genre."
            });
          } else {
            console.log(`Not found: ${searchTerm}`);
            resolve({
              name: gameObj.name,
              id: 0,
              price: 45000, // Default price
              image: "https://via.placeholder.com/300x450?text=" + encodeURIComponent(gameObj.name),
              category: gameObj.category,
              description: "Popular " + gameObj.category + " title available now."
            });
          }
        } catch (e) {
          console.error(`Error parsing ${gameObj.name}: ${e.message}`);
          resolve(null);
        }
      });
    }).on('error', (err) => {
      console.error(`Error fetching ${gameObj.name}: ${err.message}`);
      resolve(null);
    });
  });
};

const run = async () => {
  console.log("Starting fetch...");
  const results = [];
  
  // Process in batches of 5
  for (let i = 0; i < gamesList.length; i += 5) {
    const batch = gamesList.slice(i, i + 5);
    console.log(`Fetching batch ${i/5 + 1}...`);
    const batchResults = await Promise.all(batch.map(fetchGameData));
    results.push(...batchResults.filter(r => r !== null));
    await new Promise(r => setTimeout(r, 1500)); // 1.5s delay to be safe
  }
  
  // Assign IDs starting from 19
  let startId = 19;
  const finalData = results.map(game => ({
    ...game,
    id: startId++
  }));

  console.log("Done. Writing to new_games.json");
  fs.writeFileSync('new_games.json', JSON.stringify(finalData, null, 2));
};

run();
