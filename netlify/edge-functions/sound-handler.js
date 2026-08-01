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

  const url = new URL(req.url);
  const pathname = url.pathname;

  if (!pathname.includes("/music/") && !pathname.includes("/chart/music/")) {
    return; 
  }

  // Cover image schema with full dimensions + URI metadata
  const sampleCover = {
    uri: "finn_pfp",
    url_list: [
      "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
    ],
    width: 100,
    height: 100
  };

  // Sound objects
  const rawSound1 = {
    id: 700000000000001,
    id_str: "700000000000001",
    mid: "700000000000001",
    title: "Original Sound",
    author: "sprinkles",
    album: "sprinkles",
    play_url: {
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      url_list: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ],
      width: 0,
      height: 0
    },
    cover_hd: sampleCover,
    cover_large: sampleCover,
    cover_medium: sampleCover,
    cover_thumb: sampleCover,
    duration: 60,
    user_count: 1250,
    status: 1
  };

  const rawSound2 = {
    id: 700000000000002,
    id_str: "700000000000002",
    mid: "700000000000002",
    title: "GAGA Dance Sound Mix",
    author: "Douyin Audio",
    album: "GAGA Collection",
    play_url: {
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      url_list: [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      ],
      width: 0,
      height: 0
    },
    cover_hd: sampleCover,
    cover_large: sampleCover,
    cover_medium: sampleCover,
    cover_thumb: sampleCover,
    duration: 30,
    user_count: 8900,
    status: 1
  };

  // Both flat and wrapped list entries to satisfy both legacy list views
  const soundList = [
    { music_info: rawSound1, ...rawSound1 },
    { music_info: rawSound2, ...rawSound2 }
  ];

  const mcList = [
    {
      mc_info: { mc_id: "1001", mc_name: "Hot Song" },
      music_list: soundList
    },
    {
      mc_info: { mc_id: "1002", mc_name: "My Favorites" },
      music_list: soundList
    }
  ];

  const categoryList = [
    { category_name: "Hot Song", category_id: "hot_song", music_list: soundList },
    { category_name: "My Favorites", category_id: "favorites", music_list: soundList }
  ];

  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    music_list: soundList,
    music: soundList,
    data: soundList,
    mc_list: mcList,
    music_collection_list: mcList,
    category_list: categoryList,
    music_category_list: categoryList,
    extra: {
      now: Math.floor(Date.now() / 1000),
      fatal_item_ids: []
    }
  };

  return new Response(JSON.stringify(responseData), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v3/music/*",
    "/aweme/v1/chart/music/*"
  ]
};
