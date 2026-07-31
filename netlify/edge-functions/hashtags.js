// netlify/edge-functions/discover.js

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

  const rawCategories = [
    { cid: "1001", name: "musically", desc: "hi", count: 1337 },
    { cid: "1002", name: "foryou", desc: "welcome to le #foryou brother", count: 2500 },
    { cid: "1003", name: "viral", desc: "going viral", count: 4200 },
    { cid: "1004", name: "fyp", desc: "main feed", count: 8900 },
    { cid: "1005", name: "duet", desc: "duet time", count: 5100 },
    { cid: "1006", name: "dancechallenge", desc: "hit the dance", count: 12000 },
    { cid: "1007", name: "comedy", desc: "funny moments", count: 3400 },
    { cid: "1008", name: "lipsync", desc: "lip sync battle", count: 6700 },
    { cid: "1009", name: "nostalgia", desc: "throwback", count: 9999 }
  ];

  const NEW_IMAGE_URL = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3836.jpeg";

  // Builds 3 video cards per hashtag using the new photo URL
  const buildVideos = (tagCid, tagName) => {
    return [1, 2, 3].map((num) => ({
      aweme_id: `${tagCid}0${num}`,
      desc: `#${tagName} video ${num}`,
      video: {
        play_addr: {
          url_list: [`https://valoria-social.com/videos/${tagName}_${num}.mp4`]
        },
        cover: {
          url_list: [NEW_IMAGE_URL]
        },
        origin_cover: {
          url_list: [NEW_IMAGE_URL]
        },
        height: 720,
        width: 720
      },
      author: {
        uid: `80${num}`,
        nickname: `User ${num}`,
        avatar_thumb: {
          url_list: [NEW_IMAGE_URL]
        }
      },
      statistics: {
        digg_count: 100 * num,
        comment_count: 10 * num
      }
    }));
  };

  const category_list = rawCategories.map((item) => ({
    category_type: 0,
    desc: item.desc,
    challenge_info: {
      cid: item.cid,
      cha_name: item.name,
      user_count: item.count,
      desc: item.desc
    },
    aweme_list: buildVideos(item.cid, item.name)
  }));

  const payload = {
    status_code: 0,
    status_msg: "",
    word_list: [
      { word: "musically", type: 0 },
      { word: "foryou", type: 1 },
      { word: "viral", type: 0 },
      { word: "fyp", type: 0 },
      { word: "dancechallenge", type: 0 },
      { word: "comedy", type: 0 }
    ],
    category_list: category_list,
    banner_list: [
      {
        bid: "101",
        title: "the",
        schema: "sslocal://webview?url=https://39o.netlify.app",
        banner_url: {
          url_list: [NEW_IMAGE_URL]
        }
      }
    ],
    has_more: 0,
    cursor: 0
  };

  return new Response(JSON.stringify(payload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/category/list/*",
    "/aweme/v1/category/list"
  ]
};
