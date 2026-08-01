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

  // Strict check: only intercept music/banner/collection paths
  const isMusicPath = 
    pathname.includes("/music/") || 
    pathname.includes("/chart/music/") || 
    pathname.includes("/banner/") ||
    pathname.includes("/collection/");

  if (!isMusicPath) {
    return; // Pass through to keep FYP and profile endpoints working
  }

  const sampleCover = {
    uri: "finn_pfp",
    url_list: [
      "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
    ],
    width: 720,
    height: 720
  };

  // Base Sound Objects with full field schemas
  const rawTrack1 = {
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
    status: 1,
    is_original: true,
    collect_stat: 0
  };

  const rawTrack2 = {
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
    status: 1,
    is_original: false,
    collect_stat: 0
  };

  // Formatted elements containing both flat and nested properties
  const formattedTrackList = [
    {
      type: 1,
      music_info: rawTrack1,
      music: rawTrack1,
      ...rawTrack1
    },
    {
      type: 1,
      music_info: rawTrack2,
      music: rawTrack2,
      ...rawTrack2
    }
  ];

  // Categories payload for Hot Song tab
  const categories = [
    {
      category_name: "Hot Song",
      category_id: "hot_song",
      music_list: formattedTrackList,
      aweme_list: [],
      cover: sampleCover
    },
    {
      category_name: "My Favorites",
      category_id: "favorites",
      music_list: [],
      aweme_list: [],
      cover: sampleCover
    }
  ];

  const mcList = [
    {
      mc_info: { mc_id: "1001", mc_name: "Hot Song" },
      music_list: formattedTrackList,
      aweme_list: []
    },
    {
      mc_info: { mc_id: "1002", mc_name: "My Favorites" },
      music_list: [],
      aweme_list: []
    }
  ];

  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    // Root level lists
    music_list: formattedTrackList,
    music: formattedTrackList,
    data: formattedTrackList,
    // Categories and Collections
    category_list: categories,
    music_category_list: categories,
    mc_list: mcList,
    music_collection_list: mcList,
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
    "/aweme/v1/chart/music/*",
    "/aweme/v1/banner/*",
    "/aweme/v1/collection/*"
  ]
};
