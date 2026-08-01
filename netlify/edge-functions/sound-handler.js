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

  // Pass through non-music / non-banner requests
  const isMusicPath = 
    pathname.includes("/music/") || 
    pathname.includes("/chart/music/") || 
    pathname.includes("/banner/") ||
    pathname.includes("/collection/");

  if (!isMusicPath) {
    return; // Preserve FYP / User feed routes
  }

  const sampleCover = {
    uri: "finn_pfp",
    url_list: [
      "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
    ],
    width: 720,
    height: 720
  };

  // Base Sound Objects
  const track1Data = {
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
    is_original: true
  };

  const track2Data = {
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
    is_original: false
  };

  // Legacy pickers render track rows via `music_info` wrapper
  const formattedTrackList = [
    {
      type: 1,
      music_info: track1Data,
      music: track1Data,
      ...track1Data
    },
    {
      type: 1,
      music_info: track2Data,
      music: track2Data,
      ...track2Data
    }
  ];

  // Category Banner items (populates the 2 top boxes)
  const categoryBanners = [
    {
      category_name: "Hot Song",
      category_id: "hot_song",
      cover: sampleCover,
      music_list: formattedTrackList,
      aweme_list: []
    },
    {
      category_name: "My Favorites",
      category_id: "favorites",
      cover: sampleCover,
      music_list: [],
      aweme_list: []
    }
  ];

  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    // Direct track feeds
    music_list: formattedTrackList,
    music: formattedTrackList,
    data: formattedTrackList,
    // Category & banner structures
    category_list: categoryBanners,
    music_category_list: categoryBanners,
    mc_list: [
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
    ],
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
