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

  // Mock Video Feed
  const mockVideos = [1, 2, 3, 4].map((num) => ({
    aweme_id: `900${num}`,
    desc: `Iphone Tole Tole Phonk 😂😂👑🫱🫱🫱 #wiedlak #bloxyzwiedlakkasefar #wiedlakfamily #meme`,
    create_time: Math.floor(Date.now() / 1000),
    author: {
      uid: `100${num}`,
      nickname: `bloxyz wiedlak kasefar`,
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

  // Mock User List
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

  // Mock Music List (Sounds)
  const mockSounds = [
    {
      music_info: {
        id: 7001,
        id_str: "7001",
        title: "Tole Tole Phonk",
        author: "wiedlak",
        duration: 30,
        play_url: {
          url_list: ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"]
        },
        cover_thumb: {
          url_list: [IMAGE_URL]
        },
        user_count: 1337
      }
    },
    {
      music_info: {
        id: 7002,
        id_str: "7002",
        title: "Original Sound",
        author: "sprinkles",
        duration: 15,
        play_url: {
          url_list: ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"]
        },
        cover_thumb: {
          url_list: [IMAGE_URL]
        },
        user_count: 420
      }
    }
  ];

  // Mock Challenge List (Hashtags)
  const mockHashtags = [
    {
      challenge_info: {
        cid: "1001",
        cha_name: "wiedlak",
        user_count: 1337,
        desc: "wiedlak challenge"
      }
    },
    {
      challenge_info: {
        cid: "1002",
        cha_name: "bloxyzwiedlakkasefar",
        user_count: 2500,
        desc: "bloxyz wiedlak kasefar trend"
      }
    },
    {
      challenge_info: {
        cid: "1003",
        cha_name: "meme",
        user_count: 9999,
        desc: "funny memes"
      }
    }
  ];

  const payload = {
    status_code: 0,
    status_msg: "",
    aweme_list: mockVideos,
    user_list: mockUsers,
    music_list: mockSounds,
    music: mockSounds,             // Some client versions look for 'music' array
    challenge_list: mockHashtags,
    category_list: mockHashtags,  // Some client versions look for 'category_list' array
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
    "/aweme/v1/general/search",
    "/aweme/v1/search/music/*",
    "/aweme/v1/search/music",
    "/aweme/v1/search/challenge/*",
    "/aweme/v1/search/challenge"
  ]
};
