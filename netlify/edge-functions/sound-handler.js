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

  // Strict check: only respond to music, collection, or banner routes
  const isMusicPath = 
    pathname.includes("/music/") || 
    pathname.includes("/chart/music/") || 
    pathname.includes("/banner/") ||
    pathname.includes("/collection/");

  if (!isMusicPath) {
    return; // Pass through so FYP / user profiles are NOT affected
  }

  // Cover image schema with full metadata required by legacy image loaders
  const sampleCover = {
    uri: "finn_pfp",
    url_list: [
      "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
    ],
    width: 720,
    height: 720
  };

  // Sound Track 1
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
    owner_handle: "sprinkles"
  };

  // Sound Track 2
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
    owner_handle: "Douyin Audio"
  };

  // Formatted items containing flat attributes AND nested `music` / `music_info` wrappers
  const formattedTracks = [
    {
      type: 1,
      music: rawTrack1,
      music_info: rawTrack1,
      ...rawTrack1
    },
    {
      type: 1,
      music: rawTrack2,
      music_info: rawTrack2,
      ...rawTrack2
    }
  ];

  // Banners for the top carousel (replaces the blank grey squares)
  const bannerList = [
    {
      bid: "banner_1",
      title: "Hot Sounds",
      banner_url: sampleCover,
      width: 720,
      height: 360,
      type: 1
    },
    {
      bid: "banner_2",
      title: "GAGA Dance",
      banner_url: sampleCover,
      width: 720,
      height: 360,
      type: 1
    }
  ];

  // Hot Song has items, My Favorites is explicitly empty []
  const mcList = [
    {
      mc_info: {
        mc_id: "1001",
        mc_name: "Hot Song"
      },
      music_list: formattedTracks,
      aweme_list: []
    },
    {
      mc_info: {
        mc_id: "1002",
        mc_name: "My Favorites"
      },
      music_list: [],
      aweme_list: []
    }
  ];

  const categoryList = [
    {
      category_name: "Hot Song",
      category_id: "hot_song",
      music_list: formattedTracks
    },
    {
      category_name: "My Favorites",
      category_id: "favorites",
      music_list: []
    }
  ];

  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    // Banner cards at top
    banner_list: bannerList,
    banner: bannerList,
    // Root level lists
    music_list: formattedTracks,
    music: formattedTracks,
    data: formattedTracks,
    // Tabbed feeds (Hot Song populated, Favorites empty)
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

// Route matching for music & banner subpaths
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
