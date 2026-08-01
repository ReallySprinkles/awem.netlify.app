// netlify/edge-functions/friends-feed-handler.js

export default async (req) => {
  const url = new URL(req.url);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const mockFeed = [
    {
      aweme_id: "7100000000000000001",
      desc: "Welcome to your friends feed! 🚀",
      create_time: Math.floor(Date.now() / 1000),
      author: {
        uid: "7117828228",
        nickname: "sprinkles",
        unique_id: "sprinkles.dude",
        avatar_thumb: {
          url_list: ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"]
        }
      },
      video: {
        play_addr: {
          url_list: [
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          ]
        },
        cover: {
          url_list: ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"]
        },
        duration: 15000
      },
      statistics: {
        digg_count: 24,
        comment_count: 2,
        share_count: 5,
        play_count: 1337
      }
    }
  ];

  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "success",
      has_more: 1,
      cursor: Date.now(),
      aweme_list: mockFeed,
      data: mockFeed
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/friend/feed/*",
    "/aweme/v1/friend/feed",
    "/aweme/v2/friend/feed/*",
    "/aweme/v2/friend/feed",
    "/aweme/v1/follow/feed/*",
    "/aweme/v1/follow/feed",
    "/aweme/v1/familiar/feed/*",
    "/aweme/v1/familiar/feed"
  ]
};
