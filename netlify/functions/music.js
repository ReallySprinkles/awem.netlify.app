// netlify/functions/aweme.js - musical.ly 7.x /aweme Sound Picker API handler

exports.handler = async (event, context) => {
  // CORS headers required by the client to allow /aweme/ fetches
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  // Handle preflight requests from the client
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Common sound item structure expected by 7.x /aweme client
  const soundCatalog = [
    {
      "music_info": {
        "id": 7000000000000000001,
        "id_str": "7000000000000000001",
        "title": "Original Sound - sprinkles",
        "author": "sprinkles",
        "album": "Original Sound",
        "duration": 15,
        "user_count": 1420,
        "cover_thumb": {
          "url_list": [
            "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
          ]
        },
        "cover_medium": {
          "url_list": [
            "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
          ]
        },
        "play_url": {
          "url_list": [
            "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
          ]
        }
      }
    },
    {
      "music_info": {
        "id": 7000000000000000002,
        "id_str": "7000000000000000002",
        "title": "Export Sound",
        "author": "sprinkles",
        "album": "Export Sound",
        "duration": 12,
        "user_count": 85,
        "cover_thumb": {
          "url_list": [
            "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
          ]
        },
        "cover_medium": {
          "url_list": [
            "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
          ]
        },
        "play_url": {
          "url_list": [
            "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/export_1785356065271.mp3"
          ]
        }
      }
    }
  ];

  // Base payload response format for musical.ly 7.x
  const responsePayload = {
    "status_code": 0,
    "has_more": 0,
    "cursor": 0,
    "music_list": soundCatalog,
    "extra": {
      "now": Date.now(),
      "logid": "aweme_music_picker_7x"
    }
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(responsePayload)
  };
};
