// netlify/edge-functions/douyin-device-handler.js

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

  // Handle fake deletion/removal
  if (url.pathname.includes("remove") || url.pathname.includes("delete") || url.pathname.includes("logout") || url.pathname.includes("unbind")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "success",
        message: "success",
        data: { status: 0, result: true }
      }),
      { status: 200, headers }
    );
  }

  const nowSeconds = Math.floor(Date.now() / 1000);

  const devicesList = [
    {
      device_id: "901823019283019",
      device_name: "iPhone 17 Pro Max",
      device_type: "iPhone 17 Pro Max",
      device_model: "iPhone18,2",
      last_active_time: nowSeconds,
      login_time: nowSeconds,
      is_current_device: 1,
      is_current: true,
      city: "Cairo, Egypt",
      location: "Cairo, Egypt"
    },
    {
      device_id: "718930129381029",
      device_name: "iPhone 16 Pro",
      device_type: "iPhone 16 Pro",
      device_model: "iPhone17,1",
      last_active_time: nowSeconds - 3600,
      login_time: nowSeconds - 3600,
      is_current_device: 0,
      is_current: false,
      city: "Cairo, Egypt",
      location: "Cairo, Egypt"
    },
    {
      device_id: "612938475102938",
      device_name: "iPhone 13",
      device_type: "iPhone 13",
      device_model: "iPhone14,5",
      last_active_time: nowSeconds - 86400 * 3,
      login_time: nowSeconds - 86400 * 3,
      is_current_device: 0,
      is_current: false,
      city: "Cairo, Egypt",
      location: "Cairo, Egypt"
    },
    {
      device_id: "501928374610293",
      device_name: "Samsung Galaxy A23",
      device_type: "Samsung Galaxy A23",
      device_model: "SM-A235F",
      last_active_time: nowSeconds - 86400 * 7,
      login_time: nowSeconds - 86400 * 7,
      is_current_device: 0,
      is_current: false,
      city: "Cairo, Egypt",
      location: "Cairo, Egypt"
    },
    {
      device_id: "829301823901823",
      device_name: "PlayStation 5",
      device_type: "PlayStation 5",
      device_model: "PS5",
      last_active_time: nowSeconds - 86400 * 14,
      login_time: nowSeconds - 86400 * 14,
      is_current_device: 0,
      is_current: false,
      city: "Cairo, Egypt",
      location: "Cairo, Egypt"
    }
  ];

  // Douyin wrapper combinations
  const payload = {
    status_code: 0,
    status_msg: "success",
    message: "success",
    err_no: 0,
    data: {
      status_code: 0,
      devices: devicesList,
      device_list: devicesList,
      login_device_list: devicesList,
      auth_devices: devicesList
    },
    devices: devicesList,
    device_list: devicesList,
    login_device_list: devicesList
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/passport/*",
    "/security/*",
    "/account/*"
  ]
};
