// netlify/edge-functions/detail.js

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

  const url = new URL(req.url);
  const awemeId = url.searchParams.get("aweme_id") || "7000000000000000001";
  const IMAGE_URL = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3836.jpeg";

  const singleAweme = {
    aweme_id: awemeId,
    desc: "Valoria Social Video",
    create_time: Math.floor(Date.now() / 1000),
    author: {
      uid: "1001",
      nickname: "Sprinkles",
      avatar_thumb: {
        url_list: [IMAGE_URL]
      }
    },
    video: {
      play_addr: {
        url_list: [
          "https://valoria-social.com/videos/video1.mp4"
        ]
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
      digg_count: 1337,
      comment_count: 42,
      share_count: 12
    },
    status: {
      allow_share: true,
      is_delete: false,
      allow_comment: true
    }
  };

  const payload = {
    status_code: 0,
    status_msg: "",
    aweme_detail: singleAweme,
    aweme_list: [singleAweme]
  };

  return new Response(JSON.stringify(payload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/aweme/detail/*",
    "/aweme/v1/aweme/detail",
    "/aweme/v1/multi/aweme/detail/*",
    "/aweme/v1/multi/aweme/detail"
  ]
};
