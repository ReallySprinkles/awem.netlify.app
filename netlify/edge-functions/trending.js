// netlify/edge-functions/trending.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8"
  };

  const payload = {
    status_code: 0,
    data: {
      word_list: [
        { word: "musically", type: 0, label: 0 },
        { word: "foryou", type: 1, label: 1 },
        { word: "viral", type: 0, label: 0 },
        { word: "fyp", type: 0, label: 0 },
        { word: "dancechallenge", type: 0, label: 0 },
        { word: "comedy", type: 0, label: 0 }
      ]
    },
    // Backup arrays for older client builds:
    word_list: [
      { word: "musically", type: 0 },
      { word: "foryou", type: 1 },
      { word: "viral", type: 0 },
      { word: "fyp", type: 0 },
      { word: "dancechallenge", type: 0 },
      { word: "comedy", type: 0 }
    ]
  };

  return new Response(JSON.stringify(payload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/search/trending/*",
    "/aweme/v1/search/trending",
    "/aweme/v1/hot/search/list/*",
    "/aweme/v1/hot/search/list"
  ]
};
