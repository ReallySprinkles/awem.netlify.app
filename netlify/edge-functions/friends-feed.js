// netlify/edge-functions/social-handler.js

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

  // Follow Status Key:
  // 1 = Follows you (Button shows "Follow back")
  // 2 = Mutual / Friends (Button shows "Friends")

  const followerList = [
    {
      uid: "7000000001",
      short_id: "7000000001",
      nickname: "motorowiec",
      unique_id: "motorowiec10",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000002",
      short_id: "7000000002",
      nickname: "Milo Korfalı,,",
      unique_id: "orphanminsu",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000003",
      short_id: "7000000003",
      nickname: "Ate Nang",
      unique_id: "ate.nang",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000004",
      short_id: "7000000004",
      nickname: "weluvelvinn",
      unique_id: "weluvelvinn",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000005",
      short_id: "7000000005",
      nickname: "GABG2",
      unique_id: "gabrielini56",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000006",
      short_id: "7000000006",
      nickname: "elijah.claur",
      unique_id: "elijah.claur",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000007",
      short_id: "7000000007",
      nickname: "Solange Camargo",
      unique_id: "solangecamargoale",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000008",
      short_id: "7000000008",
      nickname: "spookboo16",
      unique_id: "spookboo16",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000009",
      short_id: "7000000009",
      nickname: "yungestz",
      unique_id: "yungestz",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000010",
      short_id: "7000000010",
      nickname: "meimei",
      unique_id: "alwaysgoober",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000011",
      short_id: "7000000011",
      nickname: "lollo.e.leutum",
      unique_id: "lollo.e.leutum",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000012",
      short_id: "7000000012",
      nickname: "giuse_ 🇮🇹",
      unique_id: "giuseppe40531",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000013",
      short_id: "7000000013",
      nickname: "Prabh",
      unique_id: "pr_00008",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000014",
      short_id: "7000000014",
      nickname: "😈KING👑CELÉBRE👑أسا...",
      unique_id: "king.celbre2",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000015",
      short_id: "7000000015",
      nickname: "._.Alphalpha",
      unique_id: "._.alphalpha",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000016",
      short_id: "7000000016",
      nickname: "L30❤️(still a gd_ranzy fan...",
      unique_id: "leooooooooooooooooooooo0",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000017",
      short_id: "7000000017",
      nickname: "ღ•",
      unique_id: "5huukyo",
      follow_status: 2, // Mutual Friend ("Friends" button)
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000018",
      short_id: "7000000018",
      nickname: "tuffboi438",
      unique_id: "tuffboi438",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000019",
      short_id: "7000000019",
      nickname: "Edgar Munguía",
      unique_id: "edgarmungua3",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000020",
      short_id: "7000000020",
      nickname: "Credxl",
      unique_id: "cooldhiaaboy478",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000021",
      short_id: "7000000021",
      nickname: "Julia Persaud",
      unique_id: "julia.persaud2",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000022",
      short_id: "7000000022",
      nickname: "cricket",
      unique_id: "niyah5460",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000023",
      short_id: "7000000023",
      nickname: "214yerick",
      unique_id: "214yerick12",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000024",
      short_id: "7000000024",
      nickname: "KachowToons95",
      unique_id: "kachow.toons",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000025",
      short_id: "7000000025",
      nickname: "vylettouchette18y",
      unique_id: "vylettouchette18y",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000026",
      short_id: "7000000026",
      nickname: "Logan ♠️ 🃏",
      unique_id: "that_white_colorado",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000027",
      short_id: "7000000027",
      nickname: "༺✦𝖍𝖞𝖉𝖗𝕬_𝕾𝖈𝖗𝖎𝖕𝖙𝖘✦༻",
      unique_id: "hydraduels",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000028",
      short_id: "7000000028",
      nickname: "💤💤💤",
      unique_id: "tothespiderman12",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000029",
      short_id: "7000000029",
      nickname: "Skate2fan",
      unique_id: "skate3fan2ndacc",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000030",
      short_id: "7000000030",
      nickname: "🦕",
      unique_id: ".halrry",
      follow_status: 2, // Mutual Friend ("Friends" button)
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000031",
      short_id: "7000000031",
      nickname: "amirokay_",
      unique_id: "amirokay_",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000032",
      short_id: "7000000032",
      nickname: "cat nior",
      unique_id: "cat.nior06",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000033",
      short_id: "7000000033",
      nickname: "paologamer20122",
      unique_id: "paologamer20122",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000034",
      short_id: "7000000034",
      nickname: "TS16",
      unique_id: "tickdickdaddy17",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000035",
      short_id: "7000000035",
      nickname: "fadedmotion",
      unique_id: "luv.scamz",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000036",
      short_id: "7000000036",
      nickname: "NⒶ",
      unique_id: "nourtomi11",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000037",
      short_id: "7000000037",
      nickname: "littleborder",
      unique_id: "littleborder",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000038",
      short_id: "7000000038",
      nickname: "KandiZilla",
      unique_id: "kandizilla",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000039",
      short_id: "7000000039",
      nickname: "Buses",
      unique_id: "dennys_manofficial563",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000040",
      short_id: "7000000040",
      nickname: "DEDAIN PEARL AUTOR",
      unique_id: "dedain.pearl.auto",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000041",
      short_id: "7000000041",
      nickname: "тгк: Красноярский телеф...",
      unique_id: "krsk_tele",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    }
  ];

  // Feed video item formatted with standard TikTok aweme schema
  const mockVideo = {
    aweme_id: "7100000000000000001",
    desc: "Friends feed video test 🚀",
    create_time: Math.floor(Date.now() / 1000),
    author: followerList[16], // ღ• (5huukyo)
    video: {
      play_addr: {
        url_list: [
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ]
      },
      cover: {
        url_list: ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"]
      },
      duration: 15000,
      width: 720,
      height: 1280
    },
    statistics: { digg_count: 99, comment_count: 12, share_count: 4, play_count: 500 },
    status: { allow_share: true, is_delete: false, is_private: false },
    rate: 1
  };

  const responseData = {
    status_code: 0,
    status_msg: "success",
    has_more: 1,
    cursor: Date.now(),
    min_cursor: Date.now() - 86400,
    max_cursor: Date.now(),
    total: 4525, // Total count displayed in header
    followers: followerList,
    followings: followerList,
    friends: followerList,
    user_list: followerList,
    aweme_list: [mockVideo],
    data: [mockVideo]
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/user/follower/list/*",
    "/aweme/v1/user/follower/list",
    "/aweme/v2/user/follower/list/*",
    "/aweme/v2/user/follower/list",
    "/aweme/v1/user/following/list/*",
    "/aweme/v1/user/following/list",
    "/aweme/v1/friend/list/*",
    "/aweme/v1/friend/list",
    "/aweme/v1/friend/feed/*",
    "/aweme/v1/friend/feed",
    "/aweme/v2/friend/feed/*",
    "/aweme/v2/friend/feed",
    "/aweme/v1/familiar/feed/*",
    "/aweme/v1/familiar/feed",
    "/aweme/v1/user/following/feed/*",
    "/aweme/v1/user/following/feed",
    "/aweme/v1/sidebar/feed/*",
    "/aweme/v1/sidebar/feed",
    "/aweme/v1/social/*",
    "/aweme/v1/tab/feed/*",
    "/aweme/v2/tab/feed/*"
  ]
};
