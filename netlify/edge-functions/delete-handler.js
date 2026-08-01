// netlify/edge-functions/delete-handler.js

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

  // Returns success so the client removes the item locally without throwing errors
  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "Item deleted successfully"
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/aweme/delete/*",
    "/aweme/v1/aweme/delete",
    "/aweme/v1/commit/item/delete/*",
    "/aweme/v1/commit/item/delete"
  ]
};
