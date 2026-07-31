// netlify/edge-functions/privacy-settings.js

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

  // --- 1. BLOCK LIST ENDPOINTS ---
  if (url.pathname.includes("/block/list")) {
    const blockedUsers = [
      {
        uid: "8000000000000000001",
        nickname: "fxrestgo0d 🩻❤️",
        unique_id: "life.is_food.and_sleep",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000002",
        nickname: "Someone story",
        unique_id: "somestories1_",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000003",
        nickname: "because both",
        unique_id: "because.both0",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000004",
        nickname: "user268161791107",
        unique_id: "user268161791107",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000005",
        nickname: "user7140233321004",
        unique_id: "user7140233321004",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000006",
        nickname: "milos2016",
        unique_id: "milos20163",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000008",
        nickname: "James Charles",
        unique_id: "jamescharles",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000009",
        nickname: "Nono AI",
        unique_id: "lucartppo",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000010",
        nickname: "TikTok Jesus",
        unique_id: "scottywartooth",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000011",
        nickname: "Spredge",
        unique_id: "spredge",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000012",
        nickname: "Jenny Hoyos",
        unique_id: "jennyhoyosfr",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000013",
        nickname: "The Constant",
        unique_id: "thecnstant",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000014",
        nickname: "Samsung Israel",
        unique_id: "samsungisrael",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000015",
        nickname: "kirkiimad",
        unique_id: "kirkiimad",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000016",
        nickname: "Brandon Max",
        unique_id: "itsbrandonmax",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000017",
        nickname: "Aysel ✨🏴",
        unique_id: "straykids_enhypen2012",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000018",
        nickname: "Stravolinska Mitrov Archivo...",
        unique_id: "stravolinska",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000019",
        nickname: "acyl34",
        unique_id: "acyl341",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      },
      {
        uid: "8000000000000000020",
        nickname: "aizen31",
        unique_id: "aizenmacapas",
        avatar_thumb: {
          url_list: [
            "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
          ]
        }
      }
    ];

    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        block_list: blockedUsers,
        has_more: 0
      }),
      { status: 200, headers }
    );
  }

  // --- 2. BLOCK / UNBLOCK ACTION ---
  if (url.pathname.includes("/user/block") || url.pathname.includes("/block")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        block_status: 1
      }),
      { status: 200, headers }
    );
  }

  // --- 3. PRIVACY, DISCOVERABILITY & PUSH NOTIFICATION TOGGLES ---
  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",

      // Privacy & Findability Flags
      is_private: 1,
      is_secret: 1,
      secret: 1,
      allow_others_to_find_me: 1,
      allow_find_by_contacts: 1,
      allow_special_find: 1,
      find_by_contacts: 1,
      find_by_phone: 1,

      // Push Notification Switch Flags
      comment: 1,
      follow: 1,
      digg: 1,
      fans: 1,
      likes: 1,
      new_fans: 1,
      new_likes: 1,
      new_comments: 1,

      user: {
        uid: "7117828228",
        secret: 0,
        is_private: 0,
        allow_others_to_find_me: 1,
        allow_find_by_contacts: 1,
        allow_special_find: 1,
        comment: 1,
        follow: 1,
        digg: 1
      },
      settings: {
        status_code: 0,
        allow_others_to_find_me: 1,
        allow_find_by_contacts: 1,
        allow_special_find: 1,
        is_private: 1,
        secret: 1,
        comment: 1,
        follow: 1,
        digg: 1,
        fans: 1,
        likes: 1
      }
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/user/block/*",
    "/aweme/v1/user/block",
    "/aweme/v1/user/block/list/*",
    "/aweme/v1/user/block/list",
    "/aweme/v1/user/settings/*",
    "/aweme/v1/user/settings",
    "/aweme/v1/user/settings/notice/*",
    "/aweme/v1/user/settings/notice",
    "/aweme/v1/user/notice/*",
    "/aweme/v1/user/notice/settings/*",
    "/aweme/v1/notify/settings/*",
    "/aweme/v1/notify/settings",
    "/aweme/v1/user/set/settings/*",
    "/aweme/v1/user/set/settings",
    "/aweme/v1/user/settings/set/*",
    "/aweme/v1/user/settings/set",
    "/aweme/v1/user/set/*",
    "/aweme/v1/user/set",
    "/aweme/v1/user/settings/find/*",
    "/aweme/v1/user/privacy/*",
    "/aweme/v1/user/privacy",
    "/aweme/v1/user/modify/*",
    "/aweme/v1/user/modify",
    "/aweme/v1/commit/user/*",
    "/aweme/v1/commit/user/set/*",
    "/aweme/v1/privacy/settings/*",
    "/aweme/v1/privacy/*",
    "/aweme/v1/settings/*",
    "/settings/*"
  ]
};
