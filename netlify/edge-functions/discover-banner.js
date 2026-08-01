// netlify/edge-functions/banner-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // Direct image URL for your banner (use a 2:1 aspect ratio like 1080x540 for best fit)
  const bannerImageUrl = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3854.jpeg";

  const bannerPayload = {
    status_code: 0,
    banner: [
      {
        bid: "1001",
        title: "hi",
        banner_url: {
          uri: "banner/1001.png",
          url_list: [bannerImageUrl]
        },
        // Direct link or in-app schema when tapped (optional)
        schema: "https://discord.gg/Ta8ZtP4sCf",
        width: 1080,
        height: 540
      }
    ]
  };

  return new Response(JSON.stringify(bannerPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/banner/*",
    "/aweme/v1/banner",
    "/aweme/v1/find/*",
    "/aweme/v1/find"
  ]
};
