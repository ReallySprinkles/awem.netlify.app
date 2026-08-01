// netlify/edge-functions/profile-master.js

export default async (req) => {
  const url = new URL(req.url);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const profileUrl = `https://musically.com/h5/share/usr/7117828228`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;

  // --- RAW GITHUB PFP LINK ---
  const myPfpUrl = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";

  // --- 1. DEDICATED FOLLOWER LIST ENDPOINT ---
  if (url.pathname.includes("/follower/list")) {
    const followerList = [
      { uid: "10001", nickname: "motorowiec", unique_id: "motorowiec10", follow_status: 0 },
      { uid: "10002", nickname: "Milo Korfalı,,", unique_id: "orphanminsu", follow_status: 0 },
      { uid: "10003", nickname: "Ate Nang", unique_id: "ate.nang", follow_status: 0 },
      { uid: "10004", nickname: "weluvelvinn", unique_id: "weluvelvinn", follow_status: 0 },
      { uid: "10005", nickname: "GABG2", unique_id: "gabrielini56", follow_status: 0 },
      { uid: "10006", nickname: "elijah.claur", unique_id: "elijah.claur", follow_status: 0 },
      { uid: "10007", nickname: "Solange Camargo", unique_id: "solangecamargoale", follow_status: 0 },
      { uid: "10008", nickname: "spookboo16", unique_id: "spookboo16", follow_status: 0 },
      { uid: "10009", nickname: "yungestz", unique_id: "yungestz", follow_status: 0 },
      { uid: "10010", nickname: "meimei", unique_id: "alwaysgoober", follow_status: 0 },
      { uid: "10011", nickname: "lollo.e.leutum", unique_id: "lollo.e.leutum", follow_status: 0 },
      { uid: "10012", nickname: "giuse_ 🇮🇹", unique_id: "giuseppe40531", follow_status: 0 },
      { uid: "10013", nickname: "Prabh", unique_id: "pr_00008", follow_status: 0 },
      { uid: "10014", nickname: "😈KING👑CELÉBRE👑أسا...", unique_id: "king.celbre2", follow_status: 0 },
      { uid: "10015", nickname: "._.Alphalpha", unique_id: "._.alphalpha", follow_status: 0 },
      { uid: "10016", nickname: "L30❤️(still a gd_ranzy fan...", unique_id: "leooooooooooooooooooooo0oo", follow_status: 0 },
      { uid: "10017", nickname: "ღ•", unique_id: "5huukyo", follow_status: 2 }, // Friends
      { uid: "10018", nickname: "tuffboi438", unique_id: "tuffboi438", follow_status: 0 },
      { uid: "10019", nickname: "Edgar Munguía", unique_id: "edgarmungua3", follow_status: 0 },
      { uid: "10020", nickname: "Credxl", unique_id: "cooldhiaaboy478", follow_status: 0 },
      { uid: "10021", nickname: "Julia Persaud", unique_id: "julia.persaud2", follow_status: 0 },
      { uid: "10022", nickname: "cricket", unique_id: "niyah5460", follow_status: 0 },
      { uid: "10023", nickname: "214yerick", unique_id: "214yerick12", follow_status: 0 },
      { uid: "10024", nickname: "KachowToons95", unique_id: "kachow.toons", follow_status: 0 },
      { uid: "10025", nickname: "vylettouchette18y", unique_id: "vylettouchette18y", follow_status: 0 },
      { uid: "10026", nickname: "Logan♠️🃏", unique_id: "that_white_colorado", follow_status: 0 },
      { uid: "10027", nickname: "༄✦𝖍𝖞𝖉𝖗𝕬_𝕾𝖈𝖗𝖎𝖕𝖙𝖘✦☙", unique_id: "hydraduels", follow_status: 0 },
      { uid: "10028", nickname: "💤💤💤", unique_id: "tothespiderman12", follow_status: 0 },
      { uid: "10029", nickname: "Skate2fan", unique_id: "skate3fan2ndacc", follow_status: 0 },
      { uid: "10030", nickname: "🦕", unique_id: ".halrry", follow_status: 2 }, // Friends
      { uid: "10031", nickname: "amirokay_", unique_id: "amirokay_", follow_status: 0 },
      { uid: "10032", nickname: "cat nior", unique_id: "cat.nior06", follow_status: 0 },
      { uid: "10033", nickname: "paologamer20122", unique_id: "paologamer20122", follow_status: 0 },
      { uid: "10034", nickname: "𝘍𝘚16", unique_id: "tickdickdaddy17", follow_status: 0 },
      { uid: "10035", nickname: "fadedmotion", unique_id: "luv.scamz", follow_status: 0 },
      { uid: "10036", nickname: "N🖇️", unique_id: "nourtomi11", follow_status: 0 },
      { uid: "10037", nickname: "littleborder", unique_id: "littleborder", follow_status: 0 },
      { uid: "10038", nickname: "KandiZilla", unique_id: "kandizilla", follow_status: 0 },
      { uid: "10039", nickname: "Buses", unique_id: "dennys_manofficial563", follow_status: 0 },
      { uid: "10040", nickname: "DEDAIN PEARL AUTOR", unique_id: "dedain.pearl.auto", follow_status: 0 },
      { uid: "10041", nickname: "тгк: Красноярский телеф...", unique_id: "krsk_tele", follow_status: 0 }
    ];

    return new Response(
      JSON.stringify({
        status_code: 0,
        followers: followerList,
        total: 4525,
        has_more: 0
      }),
      { status: 200, headers }
    );
  }

  // --- 2. DEDICATED QR CODE ENDPOINTS ---
  if (url.pathname.includes("/qrcode")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        qrcode_url: {
          uri: "qrcode/7117828228.png",
          url_list: [qrImageUrl]
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 3. PROFILE & USER PAYLOAD ---
  const userPayload = {
    status_code: 0,
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      nickname: "sprinkles",
      unique_id: "sprinkles.dude",
      signature: "I'm really sprinkles 🤯\nEgyptian 🇪🇬\n(NOT A TECHTOKER!)\nDiscord username: reallysprinkles\nDISCORD SERVER HERE 👇\nhttps://discord.gg/Ta8ZtP4sCf",
      secret: 0,
      is_private: 0,
      allow_others_to_find_me: 1,

      // --- DEMOGRAPHICS & PROFILE PILLS ---
      gender: 2, // 1 = Male
      birthday: "2010-04-07", // Douyin parses this for Age & Zodiac (Aries)
      birthday_hide_level: 0,
      show_gender_strategy: 0,
      city: "Cairo",
      country: "EG",
      district: "",
      location: "Cairo, Egypt",
      ip_location: "Egypt",
      hide_location: 0,

      // --- PHONE & ACCOUNT BINDING FLAGS ---
      telephone: "+15550192831",
      phone: "+15550192831",
      mobile: "+15550192831",
      bind_phone: "+15550192831",
      is_phone_bound: true,
      has_password: true,
      has_email: true,

      // --- ALL AVATAR VARIANTS ---
      avatar_thumb: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_medium: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_larger: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_168x168: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_300x300: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },

      // --- QR CODE ---
      qrcode_url: {
        uri: "qrcode/7117828228.png",
        url_list: [qrImageUrl]
      },

      // --- SOCIAL LINKS ---
      youtube_channel_id: "UCC45pszowTR4u8OrY0HBYPA",
      youtube_channel_title: "sprinkles",
      ins_id: "iamreallysprinkles",

      // --- METRICS ---
      following_count: 1188,
      follower_count: 4525,
      total_favorited: 358800,
      aweme_count: 398,
      favoriting_count: 1123
    },
    extra: {
      now: Date.now(),
      logid: "profile_social_edge"
    }
  };

  return new Response(JSON.stringify(userPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/user/profile/self/*",
    "/aweme/v1/user",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/user/follower/list/*",
    "/aweme/v1/user/follower/list",
    "/aweme/v1/social/bind/*",
    "/aweme/v1/qrcode/*",
    "/aweme/v1/user/qrcode/*"
  ]
};
