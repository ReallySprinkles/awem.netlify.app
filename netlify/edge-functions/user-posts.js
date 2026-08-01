// netlify/edge-functions/user-feed.js

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

  // --- RAW GITHUB ASSETS ---
  const myPfpUrl = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
  
  // New Video (iPhone 11 Pro) Assets
  const newVideoMov = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785586585098.mov";
  const newVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/temp_image_7C81CCDB-083D-4E3B-AFF5-7FF035E6C4F3.jpeg";

  // Existing Video Assets
  const firstVideoMp4 = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d6hlbr7og65klb5r0ti0.mp4";
  const firstVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3810.png";

  const secondVideoMp4 = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d61421fog65kcof3lhdg.mp4";
  const secondVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3813.png";

  const thirdVideoMp4 = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d6pu2dvog65inipsr2q0.mp4";
  const thirdVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3815.png";

  const fourthVideoMov = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785523913445.mov";
  const fourthVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3818.png";

  const fifthVideoMp4 = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4";
  const fifthVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/temp_image_A8D00800-6A33-49E8-A5B8-DC05F32D8652.jpeg";

  const sixthVideoMp4 = "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v10044g50000d9kku1nog65ubmos03n0.mp4";
  const sixthVideoCover = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3821.png";

  // --- AUTHOR OBJECT ---
  const authorData = {
    uid: "7117828228",
    short_id: "sprinkles",
    nickname: "sprinkles",
    unique_id: "sprinkles.dude",
    avatar_thumb: { uri: "sprinkles_avatar", url_list: [myPfpUrl] },
    avatar_medium: { uri: "sprinkles_avatar", url_list: [myPfpUrl] },
    avatar_168x168: { uri: "sprinkles_avatar", url_list: [myPfpUrl] },
    avatar_300x300: { uri: "sprinkles_avatar", url_list: [myPfpUrl] },
    custom_verify: "",
    enterprise_verify_reason: "",
    secret: 0,
    is_discipline_member: false
  };

  // --- DEFAULT SOUND OBJECT ---
  const defaultMusic = {
    id: 7100000000000099000,
    id_str: "7100000000000099000",
    mid: "7100000000000099001",
    title: "original sound - sprinkles",
    author: "sprinkles",
    album: "original sound",
    duration: 15,
    cover_thumb: { uri: "music_cover", url_list: [myPfpUrl] },
    cover_medium: { uri: "music_cover", url_list: [myPfpUrl] },
    cover_large: { uri: "music_cover", url_list: [myPfpUrl] },
    play_url: {
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      url_list: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"]
    },
    is_original: true,
    owner_handle: "sprinkles.dude",
    status: 1
  };

  // --- FEED DATA ---
  const feedPayload = {
    status_code: 0,
    has_more: 0,
    max_cursor: 0,
    min_cursor: 0,
    aweme_list: [
      // --- TOP VIDEO 1 ---
      {
        aweme_id: "7100000000000000001",
        desc: "55 people I love you only ahh song 🥀 #Eminem #Ronaldo",
        is_top: 1,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123456/",
        share_info: {
          share_url: "https://vm.tiktok.com/ZM8123456/",
          share_desc: "Check out this video!",
          share_title: "55 people I love you only ahh song 🥀",
          share_weibo_desc: "Check out this video!"
        },
        statistics: { play_count: 2100000, digg_count: 157500, comment_count: 2235, collect_count: 30600, share_count: 1240 },
        video: {
          play_addr: { uri: "v1c044g50000d6hlbr7og65klb5r0ti0", url_list: [firstVideoMp4] },
          play_addr_h264: { uri: "v1c044g50000d6hlbr7og65klb5r0ti0", url_list: [firstVideoMp4] },
          download_addr: { uri: "v1c044g50000d6hlbr7og65klb5r0ti0", url_list: [firstVideoMp4] },
          cover: { uri: "cover_1", url_list: [firstVideoCover] },
          dynamic_cover: { uri: "cover_1", url_list: [firstVideoCover] },
          origin_cover: { uri: "cover_1", url_list: [firstVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      // --- TOP VIDEO 2 ---
      {
        aweme_id: "7100000000000000002",
        desc: "Ain't no way 😭✌️ #fyp #roblox #epstein #epsteinfiles #epsteinroblox",
        is_top: 1,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123457/",
        share_info: {
          share_url: "https://vm.tiktok.com/ZM8123457/",
          share_desc: "Check out this video!",
          share_title: "Ain't no way 😭✌️",
          share_weibo_desc: "Check out this video!"
        },
        statistics: { play_count: 1300000, digg_count: 63100, comment_count: 665, collect_count: 5732, share_count: 890 },
        video: {
          play_addr: { uri: "v1c044g50000d61421fog65kcof3lhdg", url_list: [secondVideoMp4] },
          play_addr_h264: { uri: "v1c044g50000d61421fog65kcof3lhdg", url_list: [secondVideoMp4] },
          download_addr: { uri: "v1c044g50000d61421fog65kcof3lhdg", url_list: [secondVideoMp4] },
          cover: { uri: "cover_2", url_list: [secondVideoCover] },
          dynamic_cover: { uri: "cover_2", url_list: [secondVideoCover] },
          origin_cover: { uri: "cover_2", url_list: [secondVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      // --- TOP VIDEO 3 (LAST TOP VIDEO) ---
      {
        aweme_id: "7100000000000000003",
        desc: "hi #Eminem #Ronaldo #eladeselasobinubaliepraso",
        is_top: 1,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123458/",
        share_info: {
          share_url: "https://vm.tiktok.com/ZM8123458/",
          share_desc: "Check out this video!",
          share_title: "hi",
          share_weibo_desc: "Check out this video!"
        },
        statistics: { play_count: 739400, digg_count: 70700, comment_count: 1107, collect_count: 9742, share_count: 450 },
        video: {
          play_addr: { uri: "v1c044g50000d6pu2dvog65inipsr2q0", url_list: [thirdVideoMp4] },
          play_addr_h264: { uri: "v1c044g50000d6pu2dvog65inipsr2q0", url_list: [thirdVideoMp4] },
          download_addr: { uri: "v1c044g50000d6pu2dvog65inipsr2q0", url_list: [thirdVideoMp4] },
          cover: { uri: "cover_3", url_list: [thirdVideoCover] },
          dynamic_cover: { uri: "cover_3", url_list: [thirdVideoCover] },
          origin_cover: { uri: "cover_3", url_list: [thirdVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      // --- NEW VIDEO (PLACED IMMEDIATELY AFTER LAST TOP VIDEO) ---
      {
        aweme_id: "7100000000000000099",
        desc: "Le ✨iPhone 11 Pro✨ #apple #iphone #meme #iphone11 #destroyediphone",
        is_top: 0,
        author: authorData,
        music: {
          ...defaultMusic,
          id: 7100000000000099002,
          id_str: "7100000000000099002",
          mid: "7100000000000099002",
          title: "Contains: I Know",
          author: "Polo G",
          album: "I Know - Polo G"
        },
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123499/",
        share_info: {
          share_url: "https://vm.tiktok.com/ZM8123499/",
          share_desc: "Le ✨iPhone 11 Pro✨",
          share_title: "Le ✨iPhone 11 Pro✨",
          share_weibo_desc: "Check out this video!"
        },
        statistics: { play_count: 17, digg_count: 3, comment_count: 0, collect_count: 1, share_count: 0 },
        video: {
          play_addr: { uri: "export_1785586585098", url_list: [newVideoMov] },
          play_addr_h264: { uri: "export_1785586585098", url_list: [newVideoMov] },
          download_addr: { uri: "export_1785586585098", url_list: [newVideoMov] },
          cover: { uri: "cover_99", url_list: [newVideoCover] },
          dynamic_cover: { uri: "cover_99", url_list: [newVideoCover] },
          origin_cover: { uri: "cover_99", url_list: [newVideoCover] },
          width: 720,
          height: 1280,
          ratio: "720p",
          duration: 15000
        },
        text_extra: [
          { start: 20, end: 26, type: 1, hashtag_name: "apple" },
          { start: 27, end: 34, type: 1, hashtag_name: "iphone" },
          { start: 35, end: 40, type: 1, hashtag_name: "meme" },
          { start: 41, end: 50, type: 1, hashtag_name: "iphone11" },
          { start: 51, end: 68, type: 1, hashtag_name: "destroyediphone" }
        ]
      },
      // --- REMAINING REGULAR POSTS ---
      {
        aweme_id: "7100000000000000004",
        desc: "#CapCut",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123459/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123459/", share_title: "#CapCut", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 216, digg_count: 10, comment_count: 3, collect_count: 2, share_count: 0 },
        video: {
          play_addr: { uri: "export_1785523913445", url_list: [fourthVideoMov] },
          play_addr_h264: { uri: "export_1785523913445", url_list: [fourthVideoMov] },
          download_addr: { uri: "export_1785523913445", url_list: [fourthVideoMov] },
          cover: { uri: "cover_4", url_list: [fourthVideoCover] },
          dynamic_cover: { uri: "cover_4", url_list: [fourthVideoCover] },
          origin_cover: { uri: "cover_4", url_list: [fourthVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      {
        aweme_id: "7100000000000000005",
        desc: "",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123460/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123460/", share_title: "Video", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 306, digg_count: 18, comment_count: 4, collect_count: 3, share_count: 1 },
        video: {
          play_addr: { uri: "export_1785356065271", url_list: [fifthVideoMp4] },
          play_addr_h264: { uri: "export_1785356065271", url_list: [fifthVideoMp4] },
          download_addr: { uri: "export_1785356065271", url_list: [fifthVideoMp4] },
          cover: { uri: "cover_5", url_list: [fifthVideoCover] },
          dynamic_cover: { uri: "cover_5", url_list: [fifthVideoCover] },
          origin_cover: { uri: "cover_5", url_list: [fifthVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      {
        aweme_id: "7100000000000000006",
        desc: "",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123461/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123461/", share_title: "Video", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 0, digg_count: 24, comment_count: 2, collect_count: 10, share_count: 0 },
        video: {
          play_addr: { uri: "v10044g50000d9kku1nog65ubmos03n0", url_list: [sixthVideoMp4] },
          play_addr_h264: { uri: "v10044g50000d9kku1nog65ubmos03n0", url_list: [sixthVideoMp4] },
          download_addr: { uri: "v10044g50000d9kku1nog65ubmos03n0", url_list: [sixthVideoMp4] },
          cover: { uri: "cover_6", url_list: [sixthVideoCover] },
          dynamic_cover: { uri: "cover_6", url_list: [sixthVideoCover] },
          origin_cover: { uri: "cover_6", url_list: [sixthVideoCover] },
          width: 1080,
          height: 1920,
          ratio: "720p",
          duration: 15000
        }
      },
      {
        aweme_id: "7100000000000000007",
        desc: "",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123462/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123462/", share_title: "Video", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 956, digg_count: 22, comment_count: 5, collect_count: 7, share_count: 2 },
        video: { cover: { uri: "cover_7", url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604684"] } }
      },
      {
        aweme_id: "7100000000000000008",
        desc: "#CapCut",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123463/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123463/", share_title: "#CapCut", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 1022, digg_count: 32, comment_count: 7, collect_count: 7, share_count: 3 },
        video: { cover: { uri: "cover_8", url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604685"] } }
      },
      {
        aweme_id: "7100000000000000009",
        desc: "app is called L.L.E",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123464/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123464/", share_title: "app is called L.L.E", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 350, digg_count: 8, comment_count: 6, collect_count: 2, share_count: 1 },
        video: { cover: { uri: "cover_9", url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604686"] } }
      },
      {
        aweme_id: "7100000000000000010",
        desc: "#CapCut",
        is_top: 0,
        author: authorData,
        music: defaultMusic,
        status: {
          comment_status: 0,
          allow_comment: true,
          private_status: 0,
          in_reviewing: false,
          is_delete: false,
          allow_share: true,
          is_prohibited: false,
          download_status: 0
        },
        item_comment_settings: 0,
        comment_permission_status: 0,
        allow_comment: 1,
        share_url: "https://vm.tiktok.com/ZM8123465/",
        share_info: { share_url: "https://vm.tiktok.com/ZM8123465/", share_title: "#CapCut", share_desc: "Check out this video!", share_weibo_desc: "Check out this video!" },
        statistics: { play_count: 571, digg_count: 10, comment_count: 3, collect_count: 4, share_count: 0 },
        video: { cover: { uri: "cover_10", url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604687"] } }
      }
    ]
  };

  return new Response(JSON.stringify(feedPayload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/aweme/post/*",
    "/aweme/v1/aweme/post",
    "/aweme/v1/aweme/favorite/*",
    "/aweme/v1/aweme/favorite",
    "/aweme/v1/user/aweme/*"
  ]
};
