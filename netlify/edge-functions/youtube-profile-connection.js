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

  // --- 1. DEDICATED QR CODE ENDPOINTS ---
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

  const weiboHandle = "sprinkles.dude";

  // --- 2. PROFILE & USER PAYLOAD ---
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
      
      // --- WEIBO FIELDS (NUMERIC FLAGS & ALTERNATIVE KEYS) ---
      weibo_name: weiboHandle,
      weibo_nickname: weiboHandle,
      weibo_account: weiboHandle,
      weibo_id: "7117828228",
      weibo_url: "https://weibo.com/u/7117828228",
      weibo_schema: "sinaweibo://userinfo?uid=7117828228",
      weibo_verify: "Verified Creator",
      
      // Integer flags (1 = enabled/bound, essential for Objective-C models)
      is_bind_weibo: 1,
      has_bind_weibo: 1,
      weibo_status: 1,
      sync_to_weibo: 1,
      sync_to_weibo_stat: 1,

      // --- BIND INFO ARRAY ---
      bind_info: [
        {
          platform: "weibo",
          platform_id: "7117828228",
          nickname: weiboHandle,
          weibo_name: weiboHandle,
          is_bind: true,
          bound: true
        }
      ],

      // --- METRICS ---
      following_count: 1188,
      follower_count: 4516,
      total_favorited: 358500,
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
    // v1 endpoints
    "/aweme/v1/user/profile/self/*",
    "/aweme/v1/user/profile/self",
    "/aweme/v1/user/*",
    "/aweme/v1/user",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/user/detail",
    "/aweme/v1/user/settings/*",
    "/aweme/v1/user/settings",
    "/aweme/v1/commit/user/*",
    "/aweme/v1/commit/user",
    "/aweme/v1/social/bind/*",
    "/aweme/v1/qrcode/*",
    "/aweme/v1/user/qrcode/*",

    // v2 endpoints
    "/aweme/v2/user/profile/self/*",
    "/aweme/v2/user/profile/self",
    "/aweme/v2/user/detail/*",
    "/aweme/v2/user/detail",
    "/aweme/v2/user/*",
    "/aweme/v2/user"
  ]
};
