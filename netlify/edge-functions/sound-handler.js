// netlify/edge-functions/music-handler.js

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

  // Sample sound catalog for TikTok / Douyin sound pickers
  const soundCatalog = [
    {
      id: 700000000000001,
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
      id: 700000000000002,
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

  // Populate multiple response keys so all Douyin/TikTok app versions parse the sounds successfully
  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    music_list: soundCatalog,
    music: soundCatalog,
    mc_list: soundCatalog,
    data: soundCatalog,
    extra: {
      now: Math.floor(Date.now() / 1000)
    }
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers
  });
};

// Intercept all music and audio collection routes across TikTok and Douyin clients
export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/music/list/*",
    "/aweme/v2/music/list/*",
    "/aweme/v1/music/collection/*",
    "/aweme/v2/music/collection/*"
  ]
};
