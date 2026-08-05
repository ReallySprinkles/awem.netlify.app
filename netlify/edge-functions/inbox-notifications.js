// netlify/edge-functions/inbox-handler.js

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

  // --- 1. UNREAD NOTICE COUNTS ---
  if (url.pathname.includes("/notice/count")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        notice_count: [
          { group: 1, count: 0 }, // Likes
          { group: 2, count: 0 }, // Comments
          { group: 3, count: 0 }, // Mentions
          { group: 4, count: 0 }  // Followers
        ]
      }),
      { status: 200, headers }
    );
  }

  // --- 2. NOTIFICATION LIST PAYLOAD ---
  const noticeListPayload = {
    status_code: 0,
    has_more: 0,
    total: 1,
    notices: [
      {
        nid: "10000000001",
        type: 1,
        create_time: Math.floor(Date.now() / 1000),
        user: {
          uid: "10001",
          nickname: "motorowiec",
          unique_id: "motorowiec10",
          avatar_thumb: {
            url_list: [
              "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
            ]
          }
        },
        content: "liked your video.",
        title: "New Like"
      }
    ]
  };

  return new Response(JSON.stringify(noticeListPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/notice/list/*",
    "/aweme/v1/notice/list",
    "/aweme/v1/notice/count/*",
    "/aweme/v1/notice/count",
    "/aweme/v1/im/notice/*"
  ]
};
