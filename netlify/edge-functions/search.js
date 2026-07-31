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

  // Mock User List for Users Search Tab
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

  // Mock Music Items
  const rawMusic = [
    {
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
    },
    {
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
  ];

  // Dual format for Sounds tab (some clients expect music_info wrapper, others expect bare music object)
  const mockMusicList = rawMusic.map(m => ({ music_info: m, music: m, ...m }));

  // Mock Challenge/Hashtag Items
  const rawChallenges = [
    {
      cid: "1001",
      cha_name: "wiedlak",
      user_count: 1337,
      desc: "wiedlak challenge"
    },
    {
      cid: "1002",
      cha_name: "bloxyzwiedlakkasefar",
      user_count: 2500,
      desc: "bloxyz wiedlak kasefar trend"
    },
    {
      cid: "1003",
      cha_name: "meme",
      user_count: 9999,
      desc: "funny memes"
    }
  ];

  // Dual format for Hashtags tab
  const mockChallengeList = rawChallenges.map(c => ({ challenge_info: c, challenge: c, ...c }));

  const payload = {
    status_code: 0,
    status_msg: "",
    aweme_list: mockVideos,
    user_list: mockUsers,
    
    // Sounds tab keys (handles all client variations)
    music_list: mockMusicList,
    music: mockMusicList,
    
    // Hashtags tab keys (handles all client variations)
    challenge_list: mockChallengeList,
    challenge: mockChallengeList,
    category_list: mockChallengeList,

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
    "/aweme/v1/music/search/*",
    "/aweme/v1/music/search",
    "/aweme/v1/search/challenge/*",
    "/aweme/v1/search/challenge",
    "/aweme/v1/challenge/search/*",
    "/aweme/v1/challenge/search"
  ]
};
