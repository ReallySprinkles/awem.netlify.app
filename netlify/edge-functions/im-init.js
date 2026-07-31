export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      init_status: 1,
      fetch_interval: 30,
      im_status: 1
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/im/init/*",
    "/aweme/v1/im/setup/*"
  ]
};
