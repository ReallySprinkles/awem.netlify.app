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

  // Douyin Follow Status:
  // 1 = Following
  // 2 = Mutual / Friends (朋友)
  // 0 = Not following

  const followerList = [
    {
      uid: "7000000001",
      sec_uid: "MS4wLjABAAAA_motorowiec10_placeholder",
      short_id: "7000000001",
      nickname: "motorowiec",
      unique_id: "motorowiec10",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000002",
      sec_uid: "MS4wLjABAAAA_orphanminsu_placeholder",
      short_id: "7000000002",
      nickname: "Milo Korfalı,,",
      unique_id: "orphanminsu",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000003",
      sec_uid: "MS4wLjABAAAA_atenang_placeholder",
      short_id: "7000000003",
      nickname: "Ate Nang",
      unique_id: "ate.nang",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000004",
      sec_uid: "MS4wLjABAAAA_weluvelvinn_placeholder",
      short_id: "7000000004",
      nickname: "weluvelvinn",
      unique_id: "weluvelvinn",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000005",
      sec_uid: "MS4wLjABAAAA_gabrielini56_placeholder",
      short_id: "7000000005",
      nickname: "GABG2",
      unique_id: "gabrielini56",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000006",
      sec_uid: "MS4wLjABAAAA_elijahclaur_placeholder",
      short_id: "7000000006",
      nickname: "elijah.claur",
      unique_id: "elijah.claur",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000007",
      sec_uid: "MS4wLjABAAAA_solangecamargoale_placeholder",
      short_id: "7000000007",
      nickname: "Solange Camargo",
      unique_id: "solangecamargoale",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000008",
      sec_uid: "MS4wLjABAAAA_spookboo16_placeholder",
      short_id: "7000000008",
      nickname: "spookboo16",
      unique_id: "spookboo16",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000009",
      sec_uid: "MS4wLjABAAAA_yungestz_placeholder",
      short_id: "7000000009",
      nickname: "yungestz",
      unique_id: "yungestz",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000010",
      sec_uid: "MS4wLjABAAAA_alwaysgoober_placeholder",
      short_id: "7000000010",
      nickname: "meimei",
      unique_id: "alwaysgoober",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000011",
      sec_uid: "MS4wLjABAAAA_lolloeleutum_placeholder",
      short_id: "7000000011",
      nickname: "lollo.e.leutum",
      unique_id: "lollo.e.leutum",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000012",
      sec_uid: "MS4wLjABAAAA_giuseppe40531_placeholder",
      short_id: "7000000012",
      nickname: "giuse_ 🇮🇹",
      unique_id: "giuseppe40531",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000013",
      sec_uid: "MS4wLjABAAAA_pr00008_placeholder",
      short_id: "7000000013",
      nickname: "Prabh",
      unique_id: "pr_00008",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000014",
      sec_uid: "MS4wLjABAAAA_kingcelbre2_placeholder",
      short_id: "7000000014",
      nickname: "😈KING👑CELÉBRE👑أسا...",
      unique_id: "king.celbre2",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000015",
      sec_uid: "MS4wLjABAAAA_alphalpha_placeholder",
      short_id: "7000000015",
      nickname: "._.Alphalpha",
      unique_id: "._.alphalpha",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000016",
      sec_uid: "MS4wLjABAAAA_leoooooooo_placeholder",
      short_id: "7000000016",
      nickname: "L30❤️(still a gd_ranzy fan...",
      unique_id: "leooooooooooooooooooooo0",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000017",
      sec_uid: "MS4wLjABAAAA_5huukyo_placeholder",
      short_id: "7000000017",
      nickname: "ღ•",
      unique_id: "5huukyo",
      follow_status: 2, // Mutual Friend
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000018",
      sec_uid: "MS4wLjABAAAA_tuffboi438_placeholder",
      short_id: "7000000018",
      nickname: "tuffboi438",
      unique_id: "tuffboi438",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000019",
      sec_uid: "MS4wLjABAAAA_edgarmungua3_placeholder",
      short_id: "7000000019",
      nickname: "Edgar Munguía",
      unique_id: "edgarmungua3",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000020",
      sec_uid: "MS4wLjABAAAA_cooldhiaaboy478_placeholder",
      short_id: "7000000020",
      nickname: "Credxl",
      unique_id: "cooldhiaaboy478",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000021",
      sec_uid: "MS4wLjABAAAA_juliapersaud2_placeholder",
      short_id: "7000000021",
      nickname: "Julia Persaud",
      unique_id: "julia.persaud2",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000022",
      sec_uid: "MS4wLjABAAAA_niyah5460_placeholder",
      short_id: "7000000022",
      nickname: "cricket",
      unique_id: "niyah5460",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000023",
      sec_uid: "MS4wLjABAAAA_214yerick12_placeholder",
      short_id: "7000000023",
      nickname: "214yerick",
      unique_id: "214yerick12",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000024",
      sec_uid: "MS4wLjABAAAA_kachowtoons_placeholder",
      short_id: "7000000024",
      nickname: "KachowToons95",
      unique_id: "kachow.toons",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000025",
      sec_uid: "MS4wLjABAAAA_vylettouchette18y_placeholder",
      short_id: "7000000025",
      nickname: "vylettouchette18y",
      unique_id: "vylettouchette18y",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000026",
      sec_uid: "MS4wLjABAAAA_thatwhitecolorado_placeholder",
      short_id: "7000000026",
      nickname: "Logan ♠️ 🃏",
      unique_id: "that_white_colorado",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000027",
      sec_uid: "MS4wLjABAAAA_hydraduels_placeholder",
      short_id: "7000000027",
      nickname: "༺✦𝖍𝖞𝖉𝖗𝕬_𝕾𝖈𝖗𝖎𝖕𝖙𝖘✦༻",
      unique_id: "hydraduels",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000028",
      sec_uid: "MS4wLjABAAAA_tothespiderman12_placeholder",
      short_id: "7000000028",
      nickname: "💤💤💤",
      unique_id: "tothespiderman12",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000029",
      sec_uid: "MS4wLjABAAAA_skate3fan2ndacc_placeholder",
      short_id: "7000000029",
      nickname: "Skate2fan",
      unique_id: "skate3fan2ndacc",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000030",
      sec_uid: "MS4wLjABAAAA_halrry_placeholder",
      short_id: "7000000030",
      nickname: "🦕",
      unique_id: ".halrry",
      follow_status: 2, // Mutual Friend
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000031",
      sec_uid: "MS4wLjABAAAA_amirokay_placeholder",
      short_id: "7000000031",
      nickname: "amirokay_",
      unique_id: "amirokay_",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000032",
      sec_uid: "MS4wLjABAAAA_catnior06_placeholder",
      short_id: "7000000032",
      nickname: "cat nior",
      unique_id: "cat.nior06",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000033",
      sec_uid: "MS4wLjABAAAA_paologamer20122_placeholder",
      short_id: "7000000033",
      nickname: "paologamer20122",
      unique_id: "paologamer20122",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000034",
      sec_uid: "MS4wLjABAAAA_tickdickdaddy17_placeholder",
      short_id: "7000000034",
      nickname: "TS16",
      unique_id: "tickdickdaddy17",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000035",
      sec_uid: "MS4wLjABAAAA_luvscamz_placeholder",
      short_id: "7000000035",
      nickname: "fadedmotion",
      unique_id: "luv.scamz",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000036",
      sec_uid: "MS4wLjABAAAA_nourtomi11_placeholder",
      short_id: "7000000036",
      nickname: "NⒶ",
      unique_id: "nourtomi11",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000037",
      sec_uid: "MS4wLjABAAAA_littleborder_placeholder",
      short_id: "7000000037",
      nickname: "littleborder",
      unique_id: "littleborder",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000038",
      sec_uid: "MS4wLjABAAAA_kandizilla_placeholder",
      short_id: "7000000038",
      nickname: "KandiZilla",
      unique_id: "kandizilla",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000039",
      sec_uid: "MS4wLjABAAAA_dennysmanofficial563_placeholder",
      short_id: "7000000039",
      nickname: "Buses",
      unique_id: "dennys_manofficial563",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000040",
      sec_uid: "MS4wLjABAAAA_dedainpearlauto_placeholder",
      short_id: "7000000040",
      nickname: "DEDAIN PEARL AUTOR",
      unique_id: "dedain.pearl.auto",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    },
    {
      uid: "7000000041",
      sec_uid: "MS4wLjABAAAA_krsks_tele_placeholder",
      short_id: "7000000041",
      nickname: "тгк: Красноярский телеф...",
      unique_id: "krsk_tele",
      follow_status: 1,
      follower_status: 1,
      avatar_thumb: { url_list: ["https://p16-va.tiktokcdn.com/img/user-avatar-placeholder.png"] }
    }
  ];

  // Douyin Aweme / Video item structure
  const mockVideo = {
    aweme_id: "7100000000000000001",
    item_id: "7100000000000000001",
    aweme_type: 0,
    desc: "Douyin familiar feed test 🚀",
    create_time: Math.floor(Date.now() / 1000),
    author: followerList[16],
    author_user_id: followerList[16].uid,
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
    status_msg: "",
    has_more: 1,
    cursor: Date.now(),
    min_cursor: Date.now() - 86400,
    max_cursor: Date.now(),
    total: 4525,
    followers: followerList,
    followings: followerList,
    friends: followerList,
    user_list: followerList,
    aweme_list: [mockVideo],
    data: [mockVideo],
    item_list: [mockVideo]
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/*",
    "/aweme/v2/*",
    "/aweme/v3/*"
  ]
};
