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
  if (
    !pathname.includes("/music/") &&
    !pathname.includes("/chart/music/") &&
    !pathname.includes("/banner/")
  ) {
    return;
  }

  const sampleCover = {
    uri: "finn_pfp",
    url_list: [
      "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
    ],
    width: 720,
    height: 720
  };

  // 1. Raw Audio Object (Includes matched_song & song blocks for legacy parsers)
  const track1 = {
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

  const track2 = {
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

  // Wrapped item structure that populates both banners and list cells
  const formattedTrackList = [
    {
      music: track1,
      music_info: track1,
      type: 1,
      ...track1
    },
    {
      music: track2,
      music_info: track2,
      type: 1,
      ...track2
    }
  ];

  // Top Banner / Category Carousel Objects (Fixes the 2 blank squares at top)
  const bannerList = [
    {
      bid: "banner_01",
      title: "Hot Sounds",
      banner_url: sampleCover,
      width: 720,
      height: 360,
      schema: "",
      type: 1
    },
    {
      bid: "banner_02",
      title: "GAGA Dance",
      banner_url: sampleCover,
      width: 720,
      height: 360,
      schema: "",
      type: 1
    }
  ];

  // 2. Response schema mapped to Hot Song
  const responseData = {
    status_code: 0,
    status_msg: "",
    has_more: 0,
    cursor: 0,
    // Top Banner/Card Feed
    banner_list: bannerList,
    banner: bannerList,
    // Sound lists
    music_list: formattedTrackList,
    music: formattedTrackList,
    data: formattedTrackList,
    // Category tabs
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
    category_list: [
      {
        category_name: "Hot Song",
        category_id: "hot_song",
        music_list: formattedTrackList
      },
      {
        category_name: "My Favorites",
        category_id: "favorites",
        music_list: []
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
    "/aweme/v1/banner/*"
  ]
};
