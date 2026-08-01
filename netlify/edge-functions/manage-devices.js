// netlify/edge-functions/device-handler.js

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

  // --- HANDLE FAKE DEVICE REMOVAL ---
  if (url.pathname.includes("/remove") || url.pathname.includes("/delete")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "Device removed successfully"
      }),
      { status: 200, headers }
    );
  }

  const nowSeconds = Math.floor(Date.now() / 1000);

  // --- DEVICE LIST PAYLOAD ---
  const devicePayload = {
    status_code: 0,
    data: {
      devices: [
        {
          device_id: "901823019283019",
          device_name: "iPhone 17 Pro Max",
          device_model: "iPhone18,2",
          last_active_time: nowSeconds,
          is_current_device: 1,
          location: "Cairo, Egypt"
        },
        {
          device_id: "718930129381029",
          device_name: "iPhone 16 Pro",
          device_model: "iPhone17,1",
          last_active_time: nowSeconds - 3600, // 1 hour ago
          is_current_device: 0,
          location: "Cairo, Egypt"
        },
        {
          device_id: "612938475102938",
          device_name: "iPhone 13",
          device_model: "iPhone14,5",
          last_active_time: nowSeconds - 86400 * 3, // 3 days ago
          is_current_device: 0,
          location: "Cairo, Egypt"
        },
        {
          device_id: "501928374610293",
          device_name: "Samsung Galaxy A23",
          device_model: "SM-A235F",
          last_active_time: nowSeconds - 86400 * 7, // 7 days ago
          is_current_device: 0,
          location: "Cairo, Egypt"
        },
        {
          device_id: "829301823901823",
          device_name: "PlayStation 5",
          device_model: "PS5",
          last_active_time: nowSeconds - 86400 * 14, // 14 days ago
          is_current_device: 0,
          location: "Cairo, Egypt"
        }
      ]
    }
  };

  return new Response(JSON.stringify(devicePayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/passport/app/device/*",
    "/passport/app/device",
    "/passport/device/*",
    "/passport/device/one_key_login/*",
    "/passport/user/login_device/*"
  ]
};
