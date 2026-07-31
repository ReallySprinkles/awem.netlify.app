// netlify/edge-functions/search.js

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

  const IMAGE_URL = "https://nopicforu/hi";

  // Mock Video Feed for Video & General Search Tabs
  const mockVideos = [1, 2, 3, 4].map((num) => ({
    aweme_id: `900${num}`,
    desc: `Iphone Tole Tole Phonk 😂😂👑🫱🫱🫱 #wiedlak #bloxyzwiedlakkasefar #wiedlakfamily #meme`,
    create_time: Math.floor(Date.now() / 1000),
    author: {
      uid: `100${num}`,
      nickname: `Creator ${num}`,
      avatar_thumb: {
        url_list: [IMAGE_URL]
      }
    },
    video: {
      play_addr: {
        url_list: ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"]
      },
      cover: {
        url_list: [IMAGE_URL]
      },
      origin_cover: {
        url_list: [IMAGE_URL]
      },
      height: 720,
      width: 720
    },
    statistics: {
      digg_count: 500 * num,
      comment_count: 25 * num,
      share_count: 10 * num
    }
  }));

  // Your Custom User List
  const mockUsers = [
    {
      user_info: {
        uid: "1001",
        short_id: "sprinkles.dude",
        unique_id: "sprinkles.dude",
        nickname: "sprinkles",
        signature: "hi",
        avatar_thumb: {
          url_list: [IMAGE_URL]
        },
        follower_count: 1337,
        total_favorited: 9999,
        custom_verify: "Verified Creator"
      }
    },
    {
      user_info: {
        uid: "1002",
        short_id: "le.user",
        unique_id: "le.user",
        nickname: "le user",
        signature: "le user",
        avatar_thumb: {
          url_list: [IMAGE_URL]
        },
        follower_count: 50000,
        total_favorited: 120000
      }
    }
  ];

  const payload = {
    status_code: 0,
    status_msg: "",
    aweme_list: mockVideos, // Adds videos to Videos/General tabs
    user_list: mockUsers,   // Keeps users on Users tab
    has_more: 0,
    cursor: 0
  };

  return new Response(JSON.stringify(payload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/discover/search/*",
    "/aweme/v1/discover/search",
    "/aweme/v1/search/item/*",
    "/aweme/v1/search/item",
    "/aweme/v1/general/search/*",
    "/aweme/v1/general/search"
  ]
};
