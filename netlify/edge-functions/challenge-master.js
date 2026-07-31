export default async (req) => {
  const url = new URL(req.url);
  const now = Math.floor(Date.now() / 1000);

  const tagName = url.searchParams.get("ch_name") || url.searchParams.get("cha_name") || "musically";
  const cid = url.searchParams.get("cid") || "12345678";

  // Base hashtag object
  const challengeData = {
    cid: cid,
    cha_name: tagName,
    desc: `Welcome to the official #${tagName} tag page!`,
    schema: `sslocal://challenge/detail?cid=${cid}`,
    type: 0,
    sub_type: 0,
    view_count: 5400000000,
    user_count: 890000,
    is_pgcshow: false,
    collect_stat: 0,
    author: {
      uid: "0",
      nickname: "",
      unique_id: ""
    },
    share_info: {
      share_url: `https://www.tiktok.com/tag/${tagName}`,
      share_title: `#${tagName} on TikTok`,
      share_desc: `Watch videos about #${tagName}`
    }
  };

  // 1. Hashtag Header Info Endpoint
  if (url.pathname.includes("/challenge/detail")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        // Redundancy wrappers for different client build versions:
        challenge_detail: challengeData,
        ch_info: challengeData,
        challenge_info: challengeData,
        
        // Some builds bind directly to root fields:
        ...challengeData
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }
    );
  }

  // 2. Hashtag Video Feed Endpoint
  if (url.pathname.includes("/challenge/aweme")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        min_cursor: 0,
        max_cursor: 0,
        has_more: 0,
        aweme_list: [
          {
            aweme_id: "7000000000000000001",
            desc: `Check out this #${tagName} video!`,
            create_time: now,
            author: {
              uid: "10001",
              nickname: "Creator One",
              unique_id: "creator.one",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            },
            statistics: {
              digg_count: 12500,
              comment_count: 340,
              share_count: 80,
              play_count: 150000
            },
            status: { allow_comment: true, is_delete: false }
          }
        ]
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }
    );
  }

  return new Response(JSON.stringify({ status_code: 0 }), { status: 200 });
};

export const config = {
  path: [
    "/aweme/v1/challenge/detail/*",
    "/aweme/v2/challenge/detail/*",
    "/aweme/v1/challenge/aweme/*",
    "/aweme/v2/challenge/aweme/*"
  ]
};
