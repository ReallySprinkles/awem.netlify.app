exports.handler = async (event, context) => {
  const params = event.httpMethod === "GET" 
    ? event.queryStringParameters || {} 
    : Object.fromEntries(new URLSearchParams(event.body || ""));

  console.log("--> COMMENT REQUEST PARAMS:", JSON.stringify(params));

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status_code: 0,
      comments: [
        {
          cid: "7350000000000000001",
          text: "hi",
          create_time: 1700000000,
          digg_count: 13,
          status: 1,
          user: {
            uid: "735712345678",
            unique_id: "sprinkles.dude",
            nickname: "sprinkles",
            avatar_thumb: {
              url_list: [
                "https://39o.netlify.app/avatar.jpg"
              ]
            }
          }
        }
      ],
      has_more: 0,
      cursor: 0,
      total: 1
    })
  };
};
