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

  const IMAGE_URL = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";

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
    user_list: mockUsers,
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
