// netlify/edge-functions/feed-handler.js

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

  // Helper function to inject full avatar and music cover objects
  const formatAweme = (item) => {
    const finnPic = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
    const defaultPic = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg";

    // 🔑 Override avatar to Finn the Human if unique_id is sprinkles.dude
    const isSprinkles = item.author?.unique_id === "sprinkles.dude";
    const authorPic = isSprinkles ? finnPic : (item.author?.avatar_thumb?.url_list?.[0] || defaultPic);

    return {
      ...item,
      author: {
        ...item.author,
        avatar_thumb: { url_list: [authorPic] },
        avatar_medium: { url_list: [authorPic] },
        avatar_larger: { url_list: [authorPic] },
        avatar_168x168: { url_list: [authorPic] },
        avatar_300x300: { url_list: [authorPic] }
      },
      music: {
        ...item.music,
        // 🔑 Music cover fields required for the spinning disc artwork
        cover_thumb: { url_list: [authorPic] },
        cover_medium: { url_list: [authorPic] },
        cover_large: { url_list: [authorPic] },
        cover_hd: { url_list: [authorPic] }
      }
    };
  };

  // --- RAW AWEME VIDEO LIST ---
  const rawAwemeList = [
    {
      "aweme_id": "1234567890",
      "desc": "Iphone Tole Tole Phonk 😂😂👑🫱🫱🫱 #wiedlak #bloxyzwiedlakkasefar #wiedlakfamily #meme",
      "author": {
        "uid": "7000000001",
        "nickname": "bloxyz wiedlak kasefar",
        "unique_id": "bloxyz.wiedlak.kasefar",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "bloxyz wiedlak kasefar",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 5744,
        "comment_count": 302,
        "share_count": 2076
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://tiktok.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "0987654321",
      "desc": "#Spiderman #polyesteredit",
      "author": {
        "uid": "7000000002",
        "nickname": "Gojo lover",
        "unique_id": "gojo.lover676",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "Gojo lover",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9knj6nog65nsjd1qr20.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 108816,
        "comment_count": 1155,
        "share_count": 11418
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000003",
      "desc": "#CapCut Ishowspeed yawn phonk sparta remix #ishowspeed #yawn #spartaremix #fyp",
      "author": {
        "uid": "7000000003",
        "nickname": "💲",
        "unique_id": "unknownscarface1",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "💲",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9lcabnog65sjtptvu00.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 1468,
        "comment_count": 161,
        "share_count": 469
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000004",
      "desc": "i just love the Kali memes, he rlly deserved it #techtok #tech #kali #leaks #iphoneair",
      "author": {
        "uid": "7000000004",
        "nickname": "𝘿𝙮𝙡𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝",
        "unique_id": "dylbanantech",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v24044gl0000d9p4esfog65okk7d3fd0.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 152,
        "comment_count": 70,
        "share_count": 10
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000005",
      "desc": "#fyp #funny #xycba #hamjimenoippo #cashapp",
      "author": {
        "uid": "7000000005",
        "nickname": "drtenmalonglost3rdson",
        "unique_id": "drtenmalonglost3rdson",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Contains: Packrunner Bitch",
        "author": "Konygebony",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v12044gd0000d9m5d9nog65h8f76vsf0.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 106612,
        "comment_count": 635,
        "share_count": 6349
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000006",
      "desc": "video 6",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 6000,
        "comment_count": 60,
        "share_count": 25
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000007",
      "desc": "video 7",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 7000,
        "comment_count": 70,
        "share_count": 30
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000008",
      "desc": "video 8",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 8000,
        "comment_count": 80,
        "share_count": 35
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000009",
      "desc": "video 9",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 9000,
        "comment_count": 90,
        "share_count": 40
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    },
    {
      "aweme_id": "1000000010",
      "desc": "video 10",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 10000,
        "comment_count": 100,
        "share_count": 45
      },
      "status": {
        "comment_status": 0,
        "allow_comment": true,
        "private_status": 0
      },
      "share_info": {
        "share_url": "https://example.com",
        "share_title": "hi",
        "share_desc": "Check out this video!"
      }
    }
  ];

  // Map avatar and music image keys onto all items
  const formattedAwemeList = rawAwemeList.map(formatAweme);

  // --- RANDOMIZE ARRAY (Fisher-Yates Shuffle) ---
  const shuffledList = [...formattedAwemeList];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  const feedPayload = {
    status_code: 0,
    min_cursor: 0,
    max_cursor: 0,
    has_more: 1,
    aweme_list: shuffledList,
    extra: {
      now: Date.now(),
      logid: `feed_${Math.floor(Math.random() * 1000000)}`
    }
  };

  return new Response(JSON.stringify(feedPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/feed/*",
    "/aweme/v1/feed",
    "/aweme/v2/feed/*",
    "/aweme/v2/feed"
  ]
};
