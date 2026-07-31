export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      notice_count: [
        { group: 1, count: 3 },   // Comments
        { group: 2, count: 1 },   // Mentions (@)
        { group: 3, count: 61 },  // Shares / Reposts
        { group: 4, count: 41 }   // Likes
      ],
      group_unread_count: {
        comment_count: 3,
        at_count: 1,
        share_count: 61,
        digg_count: 41
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
    "/aweme/v1/notice/count/",
    "/aweme/v2/notice/count/",
    "/aweme/v1/user/count/"
  ]
};
