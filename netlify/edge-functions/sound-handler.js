// netlify/edge-functions/social-handler.js (or music-handler.js)

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // Your exact sound catalog with safe String IDs
  const soundCatalog = [
    {
      id: "700000000000001",
      id_str: "700000000000001",
      title: "Original Sound",
      author: "sprinkles",
      album: "sprinkles",
      play_url: {
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        url_list: [
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ]
      },
      cover_thumb: {
        url_list: [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
        ]
      },
      duration: 60,
      user_count: 1250,
      status: 1
    },
    {
      id: "700000000000002",
      id_str: "700000000000002",
      title: "GAGA Dance Sound Mix",
      author: "Douyin Audio",
      album: "GAGA Collection",
      play_url: {
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        url_list: [
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        ]
      },
      cover_thumb: {
        url_list: [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
        ]
      },
      duration: 30,
      user_count: 8900,
      status: 1
    }
  ];

  // Map sound catalog into category items (How "Pick a Sound" / "Hot Song" renders)
  const categoryList = [
    {
      category_name: "Hot Song",
      category_id: "hot_song_01",
      music_list: soundCatalog,
      aweme_list: []
    },
    {
      category_name: "My Favorites",
      category_id: "favorites_01",
      music_list: soundCatalog,
      aweme_list: []
    }
  ];

  // Build the complete response structure covering all legacy Douyin/TikTok schemas
  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    // Direct Lists
    music_list: soundCatalog,
    music: soundCatalog,
    mc_list: soundCatalog,
    data: soundCatalog,
    // Category Lists (Fixes "No Content" on sound picker tab)
    category_list: categoryList,
    music_category_list: categoryList,
    extra: {
      now: Math.floor(Date.now() / 1000),
      fatal_item_ids: []
    }
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers
  });
};

// Catch-all wildcard for ANY music request route
export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v3/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v2/chart/music/*"
  ]
};
