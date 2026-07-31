// netlify/edge-functions/manage-account.js

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

  // --- 1. HANDLE PASSWORD SET / CHANGE SUBMISSIONS ---
  if (
    url.pathname.includes("/password/set") ||
    url.pathname.includes("/password/change") ||
    url.pathname.includes("/password/reset") ||
    url.pathname.includes("/passport/password")
  ) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        message: "success",
        data: {
          is_success: true,
          captcha: "",
          description: "Password set successfully"
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 2. GENERAL PASSPORT & ACCOUNT BINDING DATA ---
  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",
      message: "success",

      // Root level properties
      telephone: "+15550192831",
      mobile: "+15550192831",
      phone: "+15550192831",
      bind_phone: "+15550192831",
      phone_number: "+15550192831",
      is_phone_bound: 1,
      has_password: 1,
      can_change_password: 1,
      is_email_verified: 1,
      is_phone_verified: 1,

      // Nested data payload (used by /passport/ user endpoints)
      data: {
        user_id: "7117828228",
        telephone: "+15550192831",
        mobile: "+15550192831",
        phone: "+15550192831",
        bind_phone: "+15550192831",
        phone_number: "+15550192831",
        email: "user***@gmail.com",
        is_phone_bound: 1,
        has_password: 1,
        can_change_password: 1,
        is_email_verified: 1,
        is_phone_verified: 1
      },

      user: {
        uid: "7117828228",
        telephone: "+15550192831",
        mobile: "+15550192831",
        phone: "+15550192831",
        bind_phone: "+15550192831",
        phone_number: "+15550192831",
        has_password: 1
      }
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/user/account/*",
    "/aweme/v1/user/account",
    "/aweme/v1/user/settings/account/*",
    "/aweme/v1/user/settings/account",
    "/aweme/v1/account/info/*",
    "/aweme/v1/account/info",
    "/aweme/v1/account/settings/*",
    "/aweme/v1/account/settings",
    "/aweme/v1/passport/*",
    "/aweme/v1/passport/account/info/*",
    "/passport/user/info/*",
    "/passport/account/info/*",
    "/passport/user/info",
    "/passport/account/info",
    "/passport/password/*",
    "/passport/password",
    "/aweme/v1/user/mobile/*",
    "/aweme/v1/user/bind/*",
    "/passport/*"
  ]
};
