export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      item_react: {
        is_reviewing: false,
        review_status: 0
      },
      status: {
        is_delete: false,
        allow_share: true,
        is_prohibited: false,
        private_status: 0,
        download_status: 0
      },
      share_info: {
        share_url: "https://tiktok.com",
        share_weibo_desc: "",
        share_desc: "Check out this video!"
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/aweme/detail/",
    "/aweme/v1/item/detail/",
    "/aweme/v1/share/settings/"
  ]
};
