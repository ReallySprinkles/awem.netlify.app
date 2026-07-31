// --- NETLIFY EDGE FUNCTION CONFIGURATION ---
// Routes ONLY QR code endpoints to this Edge Function
export const config = {
  path: [
    "/qrcode/*",
    "/*/qrcode/*",
    "/aweme/v1/qrcode/*",
    "/passport/user/qrcode/*",
    "/user/qrcode/*",
    "/share/qrcode/*"
  ]
};

export default async (req, context) => {
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

  // --- QR CODE RESPONSE PAYLOAD ---
  const currentUser = {
    uid: "390001",
    short_id: "Username",
    nickname: "Name",
    signature: "Description",
    avatar_thumb: {
      url_list: ["https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"]
    },
    avatar_medium: {
      url_list: ["https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"]
    },
    unique_id: "Username",
    secret: 0,
    status: 1
  };

  const qrResponseBody = {
    status_code: 0,
    status_msg: "",
    qrcode_url: {
      url_list: [
        "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
      ]
    },
    user_info: currentUser
  };

  return new Response(JSON.stringify(qrResponseBody), {
    status: 200,
    headers
  });
};
