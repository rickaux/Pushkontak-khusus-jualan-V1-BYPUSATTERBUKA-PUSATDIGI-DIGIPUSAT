/* 

 # BUY SC KE MANZZY
 # SC INI TIDAK DI BAGIKAN SECARA GRATIS 
 # HARGA SC : 20K
 
 # CONTACT CREATOR 
 * NO WHATSAPP REAL : 082269162245
 * TELE REAL : https://t.me/ManzzyStoreReal
 
#JIKA BERMINAT BISA LANGSUNG HUBUNGI CONTACT DI ATAS TERIMAKASIH 

# Thanks To My Support
  * All Creator Bot WhatsApp
  * AI GPT Chat
  * MANZZY STORE 
  
*/
const _0x89ed04 = _0x42fa;
(function (_0x31ca53, _0x20717d) {
  const _0x4a08ca = _0x42fa,
    _0x136829 = _0x31ca53();
  while (!![]) {
    try {
      const _0x10d721 =
        parseInt(_0x4a08ca(0xb6)) / 0x1 +
        (-parseInt(_0x4a08ca(0xf8)) / 0x2) *
          (-parseInt(_0x4a08ca(0x10a)) / 0x3) +
        (-parseInt(_0x4a08ca(0xd0)) / 0x4) *
          (parseInt(_0x4a08ca(0x150)) / 0x5) +
        (parseInt(_0x4a08ca(0x119)) / 0x6) *
          (parseInt(_0x4a08ca(0x10e)) / 0x7) +
        parseInt(_0x4a08ca(0x187)) / 0x8 +
        (parseInt(_0x4a08ca(0x97)) / 0x9) * (parseInt(_0x4a08ca(0x18f)) / 0xa) +
        (-parseInt(_0x4a08ca(0x14d)) / 0xb) * (parseInt(_0x4a08ca(0x9a)) / 0xc);
      if (_0x10d721 === _0x20717d) break;
      else _0x136829["push"](_0x136829["shift"]());
    } catch (_0x499131) {
      _0x136829["push"](_0x136829["shift"]());
    }
  }
})(_0x11dc, 0x69dcf),
  process["on"](_0x89ed04(0x161), console[_0x89ed04(0x98)]),
  process["on"](_0x89ed04(0xa1), console[_0x89ed04(0x98)]),
  require("./settings");
const fs = require("fs"),
  util = require(_0x89ed04(0x88)),
  jimp = require(_0x89ed04(0x13b)),
  axios = require("axios"),
  chalk = require(_0x89ed04(0x14c)),
  yts = require(_0x89ed04(0x19b)),
  ytdl = require("node-yt-dl"),
  speed = require("performance-now"),
  moment = require(_0x89ed04(0xb4)),
  nou = require(_0x89ed04(0x8b)),
  cheerio = require("cheerio"),
  os = require("os"),
  pino = require("pino"),
  { Client } = require("ssh2"),
  fetch = require(_0x89ed04(0x137)),
  crypto = require(_0x89ed04(0x122)),
  { exec, spawn, execSync } = require(_0x89ed04(0xee)),
  {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    getBinaryNodeChildren,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require("@whiskeysockets/baileys"),
  contacts = JSON["parse"](fs["readFileSync"](_0x89ed04(0xd9))),
  time = moment()["tz"](_0x89ed04(0x15b))["format"](_0x89ed04(0x189)),
  { LoadDataBase } = require(_0x89ed04(0x102)),
  { TelegraPh, UguuSe } = require(_0x89ed04(0xbb)),
  { toAudio, toPTT, toVideo } = require(_0x89ed04(0x13c)),
  { imageToWebp, videoToWebp, writeExif } = require(_0x89ed04(0x8f)),
  {
    chatGpt,
    tiktokDl,
    facebookDl,
    instaDl,
    instaDownload,
    instaStory,
    ytMp4,
    ytMp3,
    allDl,
    Ytdl,
    cekKhodam,
  } = require(_0x89ed04(0x168)),
  {
    pinterest,
    pinterest2,
    wallpaper,
    wikimedia,
    quotesAnime,
    happymod,
    umma,
    ringtone,
    styletext,
    ssweb,
    igstalk,
    tts,
    remini,
    mediafire,
  } = require("./lib/scraper"),
  {
    unixTimestampSeconds,
    generateMessageTag,
    processTime,
    webApi,
    getRandom,
    getBuffer,
    fetchJson,
    runtime,
    clockString,
    sleep,
    isUrl,
    getTime,
    formatDate,
    tanggal,
    formatp,
    jsonformat,
    reSize,
    toHD,
    logic,
    generateProfilePicture,
    bytesToSize,
    checkBandwidth,
    getSizeMedia,
    parseMention,
    getGroupAdmins,
    readFileTxt,
    readFileJson,
    getHashedPassword,
    generateAuthToken,
    cekMenfes,
    generateToken,
    batasiTeks,
    randomText,
    isEmoji,
    getTypeUrlMedia,
    pickRandom,
    toIDR,
  } = require("./lib/function");
module[_0x89ed04(0x151)] = manzzy = async (
  _0x16fafa,
  _0x2b8808,
  _0x5e521f,
  _0x2ffdb4
) => {
  const _0xc642c = _0x89ed04;
  try {
    await LoadDataBase(_0x16fafa, _0x2b8808);
    const _0x5db9a8 = await _0x16fafa[_0xc642c(0x12d)](
        _0x16fafa[_0xc642c(0x184)]["id"]
      ),
      _0xaec598 =
        _0x2b8808[_0xc642c(0x16e)] === _0xc642c(0x115)
          ? _0x2b8808["message"][_0xc642c(0x115)]
          : _0x2b8808["type"] == _0xc642c(0x141)
          ? _0x2b8808[_0xc642c(0x173)]["imageMessage"][_0xc642c(0x114)]
          : _0x2b8808[_0xc642c(0x16e)] == _0xc642c(0x185)
          ? _0x2b8808[_0xc642c(0x173)][_0xc642c(0x185)]["caption"]
          : _0x2b8808[_0xc642c(0x16e)] == "extendedTextMessage"
          ? _0x2b8808[_0xc642c(0x173)]["extendedTextMessage"][_0xc642c(0x9e)]
          : _0x2b8808[_0xc642c(0x16e)] == _0xc642c(0x7b)
          ? _0x2b8808[_0xc642c(0x173)]["buttonsResponseMessage"][
              _0xc642c(0x10c)
            ]
          : _0x2b8808["type"] == _0xc642c(0xca)
          ? _0x2b8808[_0xc642c(0x173)]["listResponseMessage"][_0xc642c(0x17b)][
              _0xc642c(0xe7)
            ]
          : _0x2b8808[_0xc642c(0x16e)] == _0xc642c(0xf5)
          ? _0x2b8808["message"]["templateButtonReplyMessage"][_0xc642c(0xc5)]
          : _0x2b8808["type"] === _0xc642c(0x83)
          ? _0x2b8808[_0xc642c(0x173)][_0xc642c(0x7b)]?.[_0xc642c(0x10c)] ||
            _0x2b8808[_0xc642c(0x173)][_0xc642c(0xca)]?.[_0xc642c(0x17b)][
              _0xc642c(0xe7)
            ] ||
            _0x2b8808[_0xc642c(0x9e)]
          : "",
      _0x11ab06 =
        typeof _0x2b8808[_0xc642c(0x9e)] == "string" ? _0x2b8808["text"] : "",
      _0x4d7283 = ".",
      _0x2e8c54 = _0xaec598[_0xc642c(0xdd)](_0x4d7283),
      _0x3c8994 = _0x2b8808["key"][_0xc642c(0xf7)],
      _0x3f4e9f = _0xaec598[_0xc642c(0x174)]()
        [_0xc642c(0xf9)](/ +/)
        [_0xc642c(0x91)](0x1),
      _0x4ac058 = _0x2b8808["quoted"] || _0x2b8808,
      _0x2f12a2 = (isOwner = [_0x5db9a8, ...owner]
        [_0xc642c(0x16a)](
          (_0x4d2820) => _0x4d2820["replace"](/[^0-9]/g, "") + _0xc642c(0xfc)
        )
        [_0xc642c(0x153)](_0x2b8808[_0xc642c(0xea)])),
      _0x4c3bb1 = _0x2b8808[_0xc642c(0xc3)][_0xc642c(0x9c)]
        ? _0x16fafa[_0xc642c(0x184)]["id"][_0xc642c(0xf9)](":")[0x0] +
            _0xc642c(0xfc) || _0x16fafa[_0xc642c(0x184)]["id"]
        : _0x2b8808[_0xc642c(0xc3)][_0xc642c(0x11f)] ||
          _0x2b8808[_0xc642c(0xc3)]["remoteJid"],
      _0x4c040a =
        _0x4ac058[_0xc642c(0x16e)] == _0xc642c(0x163)
          ? _0x4ac058[Object["keys"](_0x4ac058)[0x1]]
          : _0x4ac058[_0xc642c(0x16e)] == _0xc642c(0x165)
          ? _0x4ac058["hydratedTemplate"][
              Object[_0xc642c(0xb8)](_0x4ac058[_0xc642c(0x117)])[0x1]
            ]
          : _0x4ac058[_0xc642c(0x16e)] == "product"
          ? _0x4ac058[Object[_0xc642c(0xb8)](_0x4ac058)[0x0]]
          : _0x2b8808[_0xc642c(0x9f)]
          ? _0x2b8808["quoted"]
          : _0x2b8808,
      _0x2bd536 = _0x2e8c54
        ? _0xaec598[_0xc642c(0x91)](_0x4d7283[_0xc642c(0x15a)])
            [_0xc642c(0x174)]()
            [_0xc642c(0xf9)]("\x20")
            [_0xc642c(0xd8)]()
            [_0xc642c(0x18a)]()
        : "",
      _0x444b6 = (q = _0x3f4e9f["join"]("\x20")),
      _0x2b9141 =
        (_0x4c040a[_0xc642c(0xc7)] || _0x4c040a)[_0xc642c(0xc6)] || "",
      _0x40ce90 = _0x4c040a["msg"] || _0x4c040a;
    _0x2e8c54 &&
      !_0x2b8808[_0xc642c(0xf6)] &&
      console["log"](
        chalk[_0xc642c(0xe9)][_0xc642c(0x10f)](_0xc642c(0xcd)),
        chalk[_0xc642c(0x123)][_0xc642c(0x188)](_0x4d7283 + _0x2bd536) +
          "\x0a" +
          chalk[_0xc642c(0xe9)]["bgWhite"]("[\x20Sender\x20]:"),
        chalk[_0xc642c(0x123)]["bold"](_0x2b8808[_0xc642c(0xea)]) +
          "\x0a" +
          chalk[_0xc642c(0xe9)]["bgWhite"](_0xc642c(0x94)),
        chalk[_0xc642c(0x123)][_0xc642c(0x188)](
          _0x2b8808[_0xc642c(0x12f)] ? "Group\x20Chat" : _0xc642c(0x199)
        ) + "\x0a\x0a"
      );
    const _0x397982 = {
        key: { remoteJid: _0xc642c(0xb1), participant: _0xc642c(0x87) },
        message: { extendedTextMessage: { text: "MANZZY\x20STORE" } },
      },
      _0x44a058 = {
        key: {
          participant: _0xc642c(0x87),
          ...(_0x2b8808[_0xc642c(0xd5)] ? { remoteJid: _0xc642c(0xb1) } : {}),
        },
        message: {
          locationMessage: { name: _0xc642c(0xad), jpegThumbnail: "" },
        },
      },
      _0x4d1d01 = {
        key: {
          participant: _0xc642c(0x87),
          ...(_0x2b8808[_0xc642c(0xd5)] ? { remoteJid: _0xc642c(0xb1) } : {}),
        },
        message: {
          locationMessage: { name: _0xc642c(0x15d), jpegThumbnail: "" },
        },
      },
      _0x2ed300 = {
        key: {
          fromMe: ![],
          participant: _0xc642c(0x87),
          ...(_0x2b8808[_0xc642c(0xd5)]
            ? { remoteJid: "status@broadcast" }
            : {}),
        },
        message: {
          productMessage: {
            product: {
              productImage: { mimetype: _0xc642c(0xae), jpegThumbnail: "" },
              title: "Payment\x20By\x20MANZZY\x20STORE",
              description: null,
              currencyCode: _0xc642c(0xc2),
              priceAmount1000: _0xc642c(0xe4),
              retailerId: _0xc642c(0x8e),
              productImageCount: 0x1,
            },
            businessOwnerJid: _0xc642c(0x87),
          },
        },
      },
      _0xc4e428 = {
        key: {
          participant: _0xc642c(0x87),
          ...(_0x2b8808[_0xc642c(0xd5)]
            ? { remoteJid: "status@broadcast" }
            : {}),
        },
        message: {
          liveLocationMessage: {
            caption: "MANZZY\x20STORE",
            jpegThumbnail: "",
          },
        },
      };
    var _0x293b82;
    try {
      _0x293b82 = await _0x16fafa["profilePictureUrl"](
        _0x2b8808["sender"],
        "image"
      );
    } catch (_0x256c5c) {
      _0x293b82 = _0xc642c(0x132);
    }
    if (
      _0x2b8808[_0xc642c(0x12f)] &&
      db[_0xc642c(0xaf)][_0x2b8808[_0xc642c(0xd5)]][_0xc642c(0x13a)]
    ) {
      var _0x121df8 =
        /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
      if (
        _0x121df8["test"](_0x2b8808[_0xc642c(0x9e)]) &&
        !_0x2f12a2 &&
        !_0x2b8808["isAdmin"] &&
        _0x2b8808[_0xc642c(0x7a)] &&
        !_0x2b8808[_0xc642c(0x9c)]
      ) {
        var _0x40fa04 =
            _0xc642c(0x15e) +
            (await _0x16fafa[_0xc642c(0x1a4)](_0x2b8808[_0xc642c(0xd5)])),
          _0x2d31fa = new RegExp(_0x40fa04, "i"),
          _0xf5694 = _0x2d31fa[_0xc642c(0x152)](_0x2b8808["text"]);
        if (_0xf5694) return;
        let _0x5c565d = _0x2b8808[_0xc642c(0xc3)][_0xc642c(0x11f)],
          _0x1e981f = _0x2b8808[_0xc642c(0xc3)]["id"];
        _0x16fafa[_0xc642c(0x17d)](
          _0x2b8808["chat"],
          {
            text:
              _0xc642c(0x19c) +
              _0x2b8808[_0xc642c(0xea)]["split"]("@")[0x0] +
              _0xc642c(0x133),
            mentions: [_0x2b8808[_0xc642c(0xea)]],
          },
          { quoted: _0x2b8808 }
        ),
          await _0x16fafa[_0xc642c(0x17d)](_0x2b8808[_0xc642c(0xd5)], {
            delete: {
              remoteJid: _0x2b8808[_0xc642c(0xd5)],
              fromMe: ![],
              id: _0x1e981f,
              participant: _0x5c565d,
            },
          });
      }
    }
    _0x16fafa[_0xc642c(0xeb)] = _0x16fafa[_0xc642c(0xeb)]
      ? _0x16fafa[_0xc642c(0xeb)]
      : {};
    let _0x316d6b = _0x2b8808[_0xc642c(0xd5)];
    if (_0x316d6b in _0x16fafa["autoshalat"]) return ![];
    let _0x58ef15 = {
      shubuh: _0xc642c(0xe1),
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: _0xc642c(0x116),
      ashar: _0xc642c(0x120),
      magrib: _0xc642c(0x180),
      isya: "19:01",
    };
    const _0x24745b = new Date(
        new Date()[_0xc642c(0xfa)]("en-US", { timeZone: "Asia/Jakarta" })
      ),
      _0x6b9de6 = _0x24745b[_0xc642c(0xed)](),
      _0xcaed46 = _0x24745b["getMinutes"](),
      _0x22d23b =
        _0x6b9de6[_0xc642c(0xb0)]()["padStart"](0x2, "0") +
        ":" +
        _0xcaed46[_0xc642c(0xb0)]()["padStart"](0x2, "0");
    for (let [_0x42110e, _0x5c22fc] of Object[_0xc642c(0x9b)](_0x58ef15)) {
      if (_0x22d23b === _0x5c22fc && _0x2b8808[_0xc642c(0x12f)]) {
        let _0x57bad3 =
          _0xc642c(0x103) +
          _0x42110e +
          "*\x20telah\x20tiba\x0aambilah\x20air\x20wudhu\x20dan\x20segeralah\x20sholat\x20\x0a\x0a_Pukul\x20*" +
          _0x5c22fc +
          _0xc642c(0x183);
        _0x16fafa[_0xc642c(0xeb)][_0x316d6b] = [
          await _0x16fafa["sendMessage"](
            _0x2b8808["chat"],
            {
              text: _0x57bad3,
              mentions: [],
              contextInfo: {
                isForwarded: !![],
                forwardingScore: 0x270f,
                mentionedJid: [],
                forwardedNewsletterMessageInfo: {
                  newsletterName: "" + botname,
                  newsletterJid: global[_0xc642c(0x110)],
                },
              },
            },
            { quoted: _0xc4e428 }
          ),
          setTimeout(async () => {
            const _0x208210 = _0xc642c;
            delete _0x16fafa[_0x208210(0xeb)][_0x2b8808[_0x208210(0xd5)]];
          }, 0xc350),
        ];
      }
    }
    var _0x4dd551 = (_0x952b0a) => {
      const _0x3a373a = _0xc642c;
      return (
        _0x3a373a(0x12e) +
        (_0x4d7283 + _0x2bd536) +
        "*\x20" +
        _0x952b0a +
        "\x0a"
      );
    };
    const _0x235046 = (_0x1ed5b1) => {
      const _0x81c6ad = _0xc642c;
      return crypto["randomBytes"](_0x1ed5b1)
        [_0x81c6ad(0xb0)]("hex")
        [_0x81c6ad(0x91)](0x0, _0x1ed5b1);
    };
    function _0x32b250(_0x2e4826) {
      const _0x1b412f = _0xc642c;
      return (
        _0x2e4826["charAt"](0x0)[_0x1b412f(0x143)]() +
        _0x2e4826[_0x1b412f(0x91)](0x1)
      );
    }
    const _0x309910 = (_0x20ab91) => {
      const _0x56aa23 = _0xc642c;
      _0x16fafa[_0x56aa23(0x17d)](
        _0x3c8994,
        {
          text: _0x20ab91,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: !![],
              title: _0x56aa23(0x15d),
              containsAutoReply: !![],
              mediaType: 0x1,
              thumbnail: _0x2b8808,
              mediaUrl: "https://telegra.ph/file/967e529f2ecfbd6c26420.jpg",
              sourceUrl: _0x56aa23(0x80),
            },
          },
        },
        { quoted: _0x2b8808 }
      );
    };
    switch (_0x2bd536) {
      case _0xc642c(0x157):
        {
          const _0x315b8d = _0xc642c(0xcc);
          await _0x16fafa["sendMessage"](
            _0x2b8808[_0xc642c(0xd5)],
            {
              text: _0x315b8d,
              mentions: [_0x2b8808[_0xc642c(0xea)]],
              contextInfo: {
                externalAdReply: {
                  thumbnail: await fs[_0xc642c(0x113)](_0xc642c(0xaa)),
                  title: _0xc642c(0x108) + namaOwner,
                  renderLargerThumbnail: !![],
                  sourceUrl: _0xc642c(0x86),
                  mediaType: 0x1,
                },
              },
            },
            { quoted: _0x2b8808 }
          );
        }
        break;
      case _0xc642c(0x75):
      case "cekidgc":
      case "listgrup":
        {
          await _0x16fafa[_0xc642c(0x17d)](_0x2b8808["chat"], {
            react: { text: "🕖", key: _0x2b8808[_0xc642c(0xc3)] },
          });
          let _0x17ac93 = Object[_0xc642c(0x82)](
              await _0x16fafa[_0xc642c(0x11a)]()[_0xc642c(0xbd)](
                (_0x35b46a) => null
              )
            ),
            _0x45904d = "\x0a";
          await _0x17ac93["forEach"]((_0x564e58, _0x2b62be) => {
            const _0x404e73 = _0xc642c;
            _0x45904d +=
              "*" +
              (_0x2b62be + 0x1) +
              _0x404e73(0x146) +
              _0x564e58[_0x404e73(0x130)] +
              _0x404e73(0x149) +
              _0x564e58["id"] +
              _0x404e73(0x13e) +
              _0x564e58[_0x404e73(0x118)][_0x404e73(0x15a)] +
              "\x20Member\x0a*\x20*Status\x20Grup\x20:*\x20" +
              (_0x564e58[_0x404e73(0x100)] == !![]
                ? "Tertutup"
                : _0x404e73(0x18d)) +
              "\x0a*\x20*Pembuat\x20:*\x20" +
              (_0x564e58[_0x404e73(0x10b)]
                ? _0x564e58[_0x404e73(0x10b)][_0x404e73(0xf9)]("@")[0x0]
                : _0x404e73(0x1a6)) +
              "\x0a\x0a";
          }),
            _0x16fafa[_0xc642c(0x17d)](
              _0x2b8808[_0xc642c(0xd5)],
              {
                text: "" + _0x45904d,
                contextInfo: {
                  mentionedJid: [_0x2b8808[_0xc642c(0xea)]],
                  externalAdReply: {
                    thumbnail: await getBuffer(_0x293b82),
                    title: _0x17ac93[_0xc642c(0x15a)] + _0xc642c(0xd7),
                    body: "©\x20" + namaOwner,
                    sourceUrl: global[_0xc642c(0x73)],
                    previewType: _0xc642c(0xf2),
                  },
                },
              },
              { quoted: _0x397982 }
            );
        }
        break;
      case "tt":
      case _0xc642c(0x13d):
        {
          if (!_0x444b6) return _0x309910(_0x4dd551(_0xc642c(0x101)));
          await tiktokDl(q)
            [_0xc642c(0xc8)](async (_0x4c31c8) => {
              const _0x1dacb7 = _0xc642c;
              await _0x16fafa["sendMessage"](_0x2b8808[_0x1dacb7(0xd5)], {
                react: { text: "🕖", key: _0x2b8808[_0x1dacb7(0xc3)] },
              });
              if (!_0x4c31c8[_0x1dacb7(0xa4)]) return _0x309910("Error!");
              if (
                _0x4c31c8[_0x1dacb7(0x8d)] == 0x0 &&
                _0x4c31c8[_0x1dacb7(0xb2)] == _0x1dacb7(0xbf)
              ) {
                let _0x53dde7 = new Array(),
                  _0xea2c63 = 0x0;
                for (let _0x4cc3da of _0x4c31c8[_0x1dacb7(0x182)]) {
                  let _0x358150 = await prepareWAMessageMedia(
                    { image: { url: "" + _0x4cc3da[_0x1dacb7(0x101)] } },
                    { upload: _0x16fafa[_0x1dacb7(0x140)] }
                  );
                  await _0x53dde7["push"]({
                    header: proto[_0x1dacb7(0xa0)][_0x1dacb7(0x124)][
                      _0x1dacb7(0x15c)
                    ][_0x1dacb7(0xe5)]({
                      title:
                        "Foto\x20Slide\x20Ke\x20*" + (_0xea2c63 += 0x1) + "*",
                      hasMediaAttachment: !![],
                      ..._0x358150,
                    }),
                    nativeFlowMessage: proto["Message"]["InteractiveMessage"][
                      _0x1dacb7(0xf4)
                    ][_0x1dacb7(0xe5)]({
                      buttons: [
                        {
                          name: _0x1dacb7(0x147),
                          buttonParamsJson:
                            _0x1dacb7(0x14b) +
                            _0x4cc3da[_0x1dacb7(0x101)] +
                            "\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}",
                        },
                      ],
                    }),
                  });
                }
                const _0x53f546 = await generateWAMessageFromContent(
                  _0x2b8808[_0x1dacb7(0xd5)],
                  {
                    viewOnceMessageV2Extension: {
                      message: {
                        messageContextInfo: {
                          deviceListMetadata: {},
                          deviceListMetadataVersion: 0x2,
                        },
                        interactiveMessage: proto["Message"][_0x1dacb7(0x124)][
                          _0x1dacb7(0xe5)
                        ]({
                          body: proto[_0x1dacb7(0xa0)]["InteractiveMessage"][
                            _0x1dacb7(0x19d)
                          ]["fromObject"]({ text: _0x1dacb7(0x1a8) }),
                          carouselMessage: proto["Message"][_0x1dacb7(0x124)][
                            _0x1dacb7(0x17f)
                          ][_0x1dacb7(0xe5)]({ cards: _0x53dde7 }),
                        }),
                      },
                    },
                  },
                  { userJid: _0x2b8808[_0x1dacb7(0xea)], quoted: _0x2b8808 }
                );
                await _0x16fafa[_0x1dacb7(0x1a1)](
                  _0x2b8808[_0x1dacb7(0xd5)],
                  _0x53f546[_0x1dacb7(0x173)],
                  { messageId: _0x53f546["key"]["id"] }
                );
              } else {
                let _0x67254a = await _0x4c31c8["data"][_0x1dacb7(0x155)](
                  (_0x104289) =>
                    _0x104289[_0x1dacb7(0x16e)] == _0x1dacb7(0x105) ||
                    _0x104289[_0x1dacb7(0x16e)] == _0x1dacb7(0x79)
                );
                await _0x16fafa[_0x1dacb7(0x17d)](
                  _0x2b8808[_0x1dacb7(0xd5)],
                  {
                    video: { url: _0x67254a[_0x1dacb7(0x101)] },
                    mimetype: _0x1dacb7(0x176),
                    caption: _0x1dacb7(0x7e),
                  },
                  { quoted: _0x2b8808 }
                );
              }
            })
            [_0xc642c(0xbd)]((_0x1baaec) => console[_0xc642c(0xef)](_0x1baaec)),
            await _0x16fafa[_0xc642c(0x17d)](_0x2b8808[_0xc642c(0xd5)], {
              react: { text: "", key: _0x2b8808[_0xc642c(0xc3)] },
            });
        }
        break;
      case _0xc642c(0x8a):
      case _0xc642c(0x162):
        {
          if (!_0x444b6) return _0x309910(_0x4dd551("https://xnxx.com"));
          if (!isUrl(_0x444b6)) return _0x309910(_0x4dd551(_0xc642c(0x19a)));
          var _0x34e888 = await axios[_0xc642c(0x99)](
              _0xc642c(0xd3) + encodeURIComponent(_0x444b6)
            ),
            _0x121df8 =
              _0xc642c(0x104) +
              _0x34e888[_0xc642c(0x182)]["toString"]() +
              "\x0a";
          await _0x16fafa["sendMessage"](
            _0x2b8808[_0xc642c(0xd5)],
            { text: _0x121df8 },
            { quoted: _0x2b8808 }
          );
        }
        break;
      case "cekidch":
      case _0xc642c(0x74):
        {
          if (!_0x2b8808["quoted"]) return _0x309910(_0xc642c(0xe8));
          await _0x16fafa[_0xc642c(0x17d)](_0x2b8808["chat"], {
            react: { text: "🕖", key: _0x2b8808[_0xc642c(0xc3)] },
          });
          let _0x357fd0, _0x19c466, _0x5b5eb9;
          try {
            try {
              (_0x357fd0 = await _0x2b8808["getQuotedObj"]()),
                (_0x19c466 = await Object[_0xc642c(0x82)](
                  _0x357fd0["message"]
                )),
                (_0x5b5eb9 = await _0x19c466[0x0][_0xc642c(0xa8)][
                  _0xc642c(0x1a7)
                ]);
            } catch {
              try {
                (_0x357fd0 = await _0x2b8808[_0xc642c(0xe6)]()),
                  (_0x19c466 = await Object[_0xc642c(0x82)](
                    _0x357fd0[_0xc642c(0x173)]
                  )),
                  (_0x5b5eb9 = await _0x19c466[0x1]["contextInfo"][
                    _0xc642c(0x1a7)
                  ]);
              } catch (_0x12acd4) {
                try {
                  (_0x357fd0 = await _0x2b8808[_0xc642c(0xe6)]()),
                    (_0x19c466 = await Object[_0xc642c(0x82)](
                      _0x357fd0[_0xc642c(0x173)]
                    )),
                    (_0x5b5eb9 = await _0x19c466[0x2]["contextInfo"][
                      _0xc642c(0x1a7)
                    ]);
                } catch (_0x511dd0) {
                  (_0x357fd0 = await _0x2b8808[_0xc642c(0xe6)]()),
                    (_0x19c466 = await Object[_0xc642c(0x82)](
                      _0x357fd0[_0xc642c(0x173)]
                    )),
                    (_0x5b5eb9 = await _0x19c466[0x3][_0xc642c(0xa8)][
                      "forwardedNewsletterMessageInfo"
                    ]);
                }
              }
            }
          } catch (_0x2eb305) {
            return;
          }
          let _0x3e5a8a =
              _0xc642c(0xba) +
              _0x5b5eb9[_0xc642c(0xde)] +
              _0xc642c(0x14f) +
              _0x5b5eb9[_0xc642c(0x144)],
            _0x473ed6 = await generateWAMessageFromContent(
              _0x2b8808[_0xc642c(0xd5)],
              {
                viewOnceMessageV2Extension: {
                  message: {
                    interactiveMessage: proto["Message"][_0xc642c(0x124)][
                      _0xc642c(0x106)
                    ]({
                      body: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                        _0xc642c(0x19d)
                      ][_0xc642c(0x106)]({ text: _0x3e5a8a }),
                      nativeFlowMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                        "NativeFlowMessage"
                      ][_0xc642c(0x106)]({
                        buttons: [
                          {
                            name: _0xc642c(0x111),
                            buttonParamsJson:
                              "{\x22display_text\x22:\x22Copy\x20ID\x20Channel\x22,\x22id\x22:\x22123456789\x22,\x22copy_code\x22:\x22" +
                              _0x5b5eb9[_0xc642c(0xde)] +
                              "\x22}",
                          },
                        ],
                      }),
                    }),
                  },
                },
              },
              { userJid: _0x2b8808[_0xc642c(0xea)], quoted: _0x2b8808 }
            );
          await _0x16fafa[_0xc642c(0x1a1)](
            _0x2b8808[_0xc642c(0xd5)],
            _0x473ed6["message"],
            { messageId: _0x473ed6["key"]["id"] }
          );
        }
        break;
      case "s":
      case _0xc642c(0x136):
      case "stiker":
        {
          if (!/image|video/gi[_0xc642c(0x152)](_0x2b9141))
            return _0x309910(_0x4dd551(_0xc642c(0xd2)));
          if (/video/gi["test"](_0x2b9141) && _0x40ce90[_0xc642c(0x19e)] > 0xf)
            return _0x309910(_0xc642c(0x142));
          var _0x5a862c = await _0x16fafa["downloadAndSaveMediaMessage"](
            _0x40ce90
          );
          await _0x16fafa["sendAsSticker"](
            _0x2b8808[_0xc642c(0xd5)],
            _0x5a862c,
            _0x2b8808,
            { packname: global[_0xc642c(0xce)] }
          ),
            await fs[_0xc642c(0x159)](_0x5a862c);
        }
        break;
      case _0xc642c(0x148):
        {
          if (!isOwner) return _0x309910(_0xc642c(0x1a0));
          if (!_0x444b6) return _0x309910(_0xc642c(0x192));
          if (!_0x444b6[_0xc642c(0xf9)]("|")) return _0x309910(_0xc642c(0x192));
          var _0x53fb6e = _0x444b6[_0xc642c(0xf9)]("|")[0x0],
            _0x5f40df = Number(_0x444b6[_0xc642c(0xf9)]("|")[0x1]),
            _0x17b26c = _0x444b6["split"]("|")[0x2];
          if (!_0x53fb6e[_0xc642c(0x127)](_0xc642c(0xb7)))
            return _0x309910(_0xc642c(0x178));
          if (isNaN(_0x5f40df)) return _0x309910(_0xc642c(0x17a));
          if (!_0x17b26c) return _0x309910(_0xc642c(0x192));
          var _0x9ee4a8;
          try {
            _0x9ee4a8 = await _0x16fafa["groupMetadata"]("" + _0x53fb6e);
          } catch (_0x96d74c) {
            return _0x309910(_0xc642c(0x19f));
          }
          const _0x40f5f6 = await _0x9ee4a8[_0xc642c(0x118)],
            _0x249e8b = await _0x40f5f6[_0xc642c(0x1a5)]((_0x5c888e) =>
              _0x5c888e["id"][_0xc642c(0x127)](".net")
            )[_0xc642c(0x16a)]((_0x49c0e8) => _0x49c0e8["id"]);
          _0x309910(
            _0xc642c(0xc4) + _0x249e8b[_0xc642c(0x15a)] + _0xc642c(0x177)
          );
          for (let _0x1bf200 of _0x249e8b) {
            _0x1bf200 !== _0x2b8808[_0xc642c(0xea)] &&
              (contacts["push"](_0x1bf200),
              await fs["writeFileSync"](
                "./database/contacts.json",
                JSON[_0xc642c(0x190)](contacts)
              ),
              await _0x16fafa[_0xc642c(0x17d)](
                _0x1bf200,
                { text: _0x17b26c },
                { quoted: _0x397982 }
              ),
              await sleep(Number(_0x5f40df)));
          }
          try {
            const _0x598199 = [...new Set(contacts)],
              _0x574bb4 = _0x598199[_0xc642c(0x16a)]((_0x5e96cf, _0x20befd) => {
                const _0x36956e = _0xc642c,
                  _0x12ac1e = [
                    _0x36956e(0x17c),
                    _0x36956e(0x12a),
                    "FN:WA[" +
                      _0x235046(0x2) +
                      "]\x20" +
                      _0x5e96cf[_0x36956e(0xf9)]("@")[0x0],
                    _0x36956e(0x107) +
                      _0x5e96cf[_0x36956e(0xf9)]("@")[0x0] +
                      ":+" +
                      _0x5e96cf[_0x36956e(0xf9)]("@")[0x0],
                    _0x36956e(0x135),
                    "",
                  ][_0x36956e(0xa6)]("\x0a");
                return _0x12ac1e;
              })[_0xc642c(0xa6)]("");
            fs[_0xc642c(0x16c)](_0xc642c(0x131), _0x574bb4, _0xc642c(0x1aa));
          } catch (_0xd1ae6b) {
            _0x309910(_0xd1ae6b[_0xc642c(0xb0)]());
          } finally {
            if (_0x2b8808[_0xc642c(0xd5)] !== _0x2b8808["sender"])
              await _0x309910(
                "Berhasil\x20Mengirim\x20Pesan\x20Ke\x20*" +
                  _0x249e8b[_0xc642c(0x15a)] +
                  _0xc642c(0x18e)
              );
            await _0x16fafa["sendMessage"](
              _0x2b8808[_0xc642c(0xea)],
              {
                document: fs[_0xc642c(0x113)](_0xc642c(0x131)),
                fileName: "contacts.vcf",
                caption: _0xc642c(0x1a3),
                mimetype: _0xc642c(0xec),
              },
              { quoted: _0x2b8808 }
            ),
              contacts[_0xc642c(0x170)](0x0, contacts[_0xc642c(0x15a)]),
              await fs["writeFileSync"](
                _0xc642c(0xd9),
                JSON[_0xc642c(0x190)](contacts)
              ),
              await fs["writeFileSync"](_0xc642c(0x131), "");
          }
        }
        break;
      case _0xc642c(0x181):
        {
          if (!isOwner) return _0x309910(_0xc642c(0x1a0));
          if (!_0x444b6) return _0x309910(_0x4dd551(_0xc642c(0x197)));
          var _0x53fb6e = _0x444b6,
            _0x9ee4a8;
          try {
            _0x9ee4a8 = await _0x16fafa[_0xc642c(0x7d)]("" + _0x53fb6e);
          } catch (_0x5c06b3) {
            return _0x309910(_0xc642c(0x19f));
          }
          const _0x5eae5c = await _0x9ee4a8[_0xc642c(0x118)],
            _0x289ba9 = await _0x5eae5c[_0xc642c(0x1a5)]((_0x3f44c1) =>
              _0x3f44c1["id"]["endsWith"](_0xc642c(0x14a))
            )["map"]((_0x2df5c3) => _0x2df5c3["id"]);
          for (let _0x155c4a of _0x289ba9) {
            _0x155c4a !== _0x2b8808["sender"] &&
              (contacts[_0xc642c(0x179)](_0x155c4a),
              fs["writeFileSync"](
                _0xc642c(0xd9),
                JSON[_0xc642c(0x190)](contacts)
              ));
          }
          try {
            const _0x5094ef = [...new Set(contacts)],
              _0x491c70 = _0x5094ef[_0xc642c(0x16a)]((_0x23173d, _0x91454a) => {
                const _0x238667 = _0xc642c,
                  _0x300eca = [
                    _0x238667(0x17c),
                    _0x238667(0x12a),
                    _0x238667(0x7f) +
                      _0x235046(0x2) +
                      "]\x20" +
                      _0x23173d[_0x238667(0xf9)]("@")[0x0],
                    _0x238667(0x107) +
                      _0x23173d[_0x238667(0xf9)]("@")[0x0] +
                      ":+" +
                      _0x23173d[_0x238667(0xf9)]("@")[0x0],
                    _0x238667(0x135),
                    "",
                  ][_0x238667(0xa6)]("\x0a");
                return _0x300eca;
              })[_0xc642c(0xa6)]("");
            fs[_0xc642c(0x16c)](_0xc642c(0x131), _0x491c70, _0xc642c(0x1aa));
          } catch (_0x594d65) {
            _0x309910(_0x594d65[_0xc642c(0xb0)]());
          } finally {
            if (_0x2b8808[_0xc642c(0xd5)] !== _0x2b8808[_0xc642c(0xea)])
              await _0x309910(
                "File\x20Kontak\x20Berhasil\x20Dikirim\x20ke\x20Private\x20Chat\x0a*Total\x20" +
                  _0x289ba9[_0xc642c(0x15a)] +
                  _0xc642c(0x15f)
              );
            await _0x16fafa[_0xc642c(0x17d)](
              _0x2b8808[_0xc642c(0xea)],
              {
                document: fs[_0xc642c(0x113)](_0xc642c(0x131)),
                fileName: _0xc642c(0x11b),
                caption: _0xc642c(0x11c) + _0x289ba9["length"] + _0xc642c(0xb9),
                mimetype: _0xc642c(0xec),
              },
              { quoted: _0x2b8808 }
            ),
              contacts[_0xc642c(0x170)](0x0, contacts["length"]),
              await fs["writeFileSync"](
                "./database/contacts.json",
                JSON[_0xc642c(0x190)](contacts)
              ),
              await fs[_0xc642c(0x16c)]("./database/contacts.vcf", "");
          }
        }
        break;
      case _0xc642c(0x169):
      case _0xc642c(0xd6):
        {
          if (!isOwner) return _0x309910(mess[_0xc642c(0x10b)]);
          if (!_0x444b6) return _0x309910(_0x4dd551(_0xc642c(0xe3)));
          global[_0xc642c(0x160)] = _0x444b6;
          const _0x22946c = await _0x16fafa["groupFetchAllParticipating"](),
            _0x208f27 = await Object[_0xc642c(0x82)](_0x22946c);
          var _0x4ee216 = [];
          for (let _0xafa018 of _0x208f27) {
            await _0x4ee216[_0xc642c(0x179)]({
              title: "" + _0xafa018[_0xc642c(0x130)],
              description:
                _0xc642c(0xa3) +
                _0xafa018[_0xc642c(0x118)]["length"] +
                _0xc642c(0xfb),
              id: ".respon_pushkontak\x20" + _0xafa018["id"],
            });
          }
          let _0x59fcc9 = await generateWAMessageFromContent(
            _0x2b8808[_0xc642c(0xd5)],
            {
              viewOnceMessageV2Extension: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 0x2,
                  },
                  interactiveMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                    _0xc642c(0x106)
                  ]({
                    body: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                      _0xc642c(0x19d)
                    ]["create"]({ text: _0xc642c(0x81) }),
                    nativeFlowMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                      _0xc642c(0xf4)
                    ][_0xc642c(0x106)]({
                      buttons: [
                        {
                          name: _0xc642c(0x172),
                          buttonParamsJson:
                            _0xc642c(0xff) +
                            _0x208f27["length"] +
                            _0xc642c(0x18c) +
                            JSON["stringify"](_0x4ee216) +
                            "\x0a}]}",
                        },
                      ],
                    }),
                  }),
                },
              },
            },
            { userJid: _0x2b8808[_0xc642c(0xea)], quoted: _0x2b8808 }
          );
          await _0x16fafa[_0xc642c(0x1a1)](
            _0x59fcc9["key"][_0xc642c(0xf7)],
            _0x59fcc9[_0xc642c(0x173)],
            { messageId: _0x59fcc9["key"]["id"] }
          );
        }
        break;
      case _0xc642c(0x156):
        {
          if (!isOwner) return _0x309910(mess[_0xc642c(0x10b)]);
          if (!_0x444b6) return _0x309910(_0x4dd551(_0xc642c(0xe3)));
          if (global[_0xc642c(0x160)] == undefined) return;
          const _0x3049d7 = global[_0xc642c(0x160)],
            _0x3daaa5 = _0x2b8808[_0xc642c(0xd5)],
            _0x54d46f = await _0x2ffdb4["groupMetadata"][_0x444b6],
            _0x8d0260 = await _0x54d46f["participants"]
              [_0xc642c(0x1a5)]((_0x16afe5) =>
                _0x16afe5["id"][_0xc642c(0x127)](_0xc642c(0x14a))
              )
              ["map"]((_0xc54281) => _0xc54281["id"]);
          delete global["temptext"],
            await _0x309910(
              "\x0aMemproses\x20Pushkontak\x20🕖\x0a\x0a-\x20*Target\x20:*\x20" +
                _0x54d46f[_0xc642c(0x130)] +
                _0xc642c(0xf3) +
                _0x8d0260[_0xc642c(0x15a)] +
                _0xc642c(0xc9)
            );
          for (let _0x311899 of _0x8d0260) {
            if (_0x311899 !== _0x5db9a8) {
              let _0x465d3a = await _0x16fafa["sendMessage"](
                _0x311899,
                {
                  text: _0x3049d7,
                  contextInfo: {
                    isForwarded: !![],
                    forwardedNewsletterMessageInfo: {
                      newsletterName: global["nameChannel"],
                      newsletterJid: global["idChannel"],
                    },
                  },
                },
                { quoted: _0x44a058 }
              );
              await _0x16fafa["sendContact"](
                _0x311899,
                [global[_0xc642c(0xd4)]],
                _0x465d3a,
                {
                  contextInfo: {
                    externalAdReply: {
                      thumbnail: await fs[_0xc642c(0x113)](
                        "./src/media/logo.jpg"
                      ),
                      title: "©\x20" + botname,
                      sourceUrl: linkGrup2,
                      renderLargerThumbnail: !![],
                      mediaType: 0x1,
                    },
                  },
                }
              ),
                await sleep(global[_0xc642c(0x84)]);
            }
          }
          await _0x16fafa[_0xc642c(0x17d)](
            _0x3daaa5,
            { text: _0xc642c(0x11d) + _0x8d0260[_0xc642c(0x15a)] },
            { quoted: _0x2b8808 }
          );
        }
        break;
      case _0xc642c(0x112):
        {
          if (!_0x2f12a2) return _0x309910(mess[_0xc642c(0x10b)]);
          if (!q) return _0x309910(_0x4dd551(_0xc642c(0x9d)));
          let _0x28fb77 = await _0x16fafa[_0xc642c(0x11a)](),
            _0x4aaad5 = await Object[_0xc642c(0xb8)](_0x28fb77);
          const _0x522079 = _0x444b6;
          let _0xc14b11 = await generateWAMessageFromContent(
              _0x2b8808["chat"],
              {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 0x2,
                    },
                    interactiveMessage: proto[_0xc642c(0xa0)][
                      "InteractiveMessage"
                    ][_0xc642c(0x106)]({
                      body: proto[_0xc642c(0xa0)]["InteractiveMessage"]["Body"][
                        "create"
                      ]({ text: "\x0a" + _0x522079 }),
                      nativeFlowMessage: proto[_0xc642c(0xa0)][
                        "InteractiveMessage"
                      ][_0xc642c(0xf4)][_0xc642c(0x106)]({
                        buttons: [
                          {
                            name: _0xc642c(0x147),
                            buttonParamsJson:
                              _0xc642c(0x195) +
                              global[_0xc642c(0x76)] +
                              _0xc642c(0x17e),
                          },
                        ],
                      }),
                    }),
                  },
                },
              },
              { userJid: _0x2b8808["sender"], quoted: _0x4d1d01 }
            ),
            _0x28c40e = 0x0;
          const _0x17dde0 = _0x2b8808[_0xc642c(0xd5)];
          await _0x309910(
            _0xc642c(0xd1) + _0x4aaad5[_0xc642c(0x15a)] + _0xc642c(0x175)
          );
          for (let _0x55918e of _0x4aaad5) {
            try {
              await _0x16fafa[_0xc642c(0x1a1)](
                _0x55918e,
                _0xc14b11[_0xc642c(0x173)],
                { messageId: _0xc14b11[_0xc642c(0xc3)]["id"] }
              ),
                (_0x28c40e += 0x1);
            } catch {}
            await sleep(global[_0xc642c(0xa7)]);
          }
          await _0x16fafa["sendMessage"](
            _0x17dde0,
            { text: _0xc642c(0xe2) + _0x28c40e },
            { quoted: _0x2b8808 }
          );
        }
        break;
      case _0xc642c(0xb5):
        {
          if (!_0x2f12a2) return _0x309910(mess["owner"]);
          if (!q) return _0x309910(_0x4dd551(_0xc642c(0x72)));
          if (!/image/[_0xc642c(0x152)](_0x2b9141))
            return _0x309910(_0x4dd551(_0xc642c(0x72)));
          const _0x1ef82c = await _0x16fafa["groupFetchAllParticipating"](),
            _0x5db0e6 = await Object["keys"](_0x1ef82c);
          let _0x50891b = 0x0;
          const _0x35a30f = _0x444b6,
            _0x2d6334 = _0x2b8808[_0xc642c(0xd5)],
            _0x1f94fa = await _0x16fafa["downloadAndSaveMediaMessage"](
              _0x40ce90
            ),
            _0xc1889f = await prepareWAMessageMedia(
              { image: await fs["readFileSync"](_0x1f94fa) },
              { upload: _0x16fafa[_0xc642c(0x140)] }
            ),
            _0x318f33 = await generateWAMessageFromContent(
              _0x2b8808[_0xc642c(0xd5)],
              {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 0x2,
                    },
                    interactiveMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                      "create"
                    ]({
                      header: proto[_0xc642c(0xa0)]["InteractiveMessage"][
                        _0xc642c(0x19d)
                      ][_0xc642c(0x106)]({
                        hasMediaAttachment: !![],
                        ..._0xc1889f,
                      }),
                      body: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                        _0xc642c(0x19d)
                      ][_0xc642c(0x106)]({ text: "\x0a" + _0x35a30f }),
                      nativeFlowMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                        "NativeFlowMessage"
                      ][_0xc642c(0x106)]({
                        buttons: [
                          {
                            name: _0xc642c(0x147),
                            buttonParamsJson:
                              _0xc642c(0x195) +
                              global[_0xc642c(0x76)] +
                              _0xc642c(0x17e),
                          },
                        ],
                      }),
                    }),
                  },
                },
              },
              { userJid: _0x2b8808[_0xc642c(0xea)], quoted: _0x4d1d01 }
            );
          await _0x309910(
            "Memproses\x20Pengiriman\x20Pesan\x20Ke\x20" +
              _0x5db0e6[_0xc642c(0x15a)] +
              _0xc642c(0x175)
          );
          for (let _0x48f1eb of _0x5db0e6) {
            try {
              await _0x16fafa["relayMessage"](
                _0x48f1eb,
                _0x318f33[_0xc642c(0x173)],
                { messageId: _0x318f33["key"]["id"] }
              ),
                (_0x50891b += 0x1);
            } catch {}
            await sleep(global[_0xc642c(0xa7)]);
          }
          await fs["unlinkSync"](_0x1f94fa),
            await _0x16fafa["sendMessage"](
              _0x2d6334,
              { text: _0xc642c(0xe2) + _0x50891b },
              { quoted: _0x2b8808 }
            );
        }
        break;
      case "pay":
      case _0xc642c(0xfe):
        {
          if (!_0x2f12a2) return _0x309910(mess["owner"]);
          await _0x16fafa["sendMessage"](_0x2b8808[_0xc642c(0xd5)], {
            react: { text: "🕖", key: _0x2b8808["key"] },
          });
          let _0x2a1957 = await prepareWAMessageMedia(
              { image: fs["readFileSync"](_0xc642c(0x139)) },
              { upload: _0x16fafa[_0xc642c(0x140)] }
            ),
            _0x43064f = await prepareWAMessageMedia(
              { image: fs[_0xc642c(0x113)]("./src/media/ovo.jpg") },
              { upload: _0x16fafa[_0xc642c(0x140)] }
            ),
            _0x1c1c02 = await prepareWAMessageMedia(
              { image: fs[_0xc642c(0x113)](_0xc642c(0x158)) },
              { upload: _0x16fafa[_0xc642c(0x140)] }
            ),
            _0xf4efdd = await prepareWAMessageMedia(
              { image: fs[_0xc642c(0x113)](_0xc642c(0xcb)) },
              { upload: _0x16fafa[_0xc642c(0x140)] }
            );
          const _0x1edf07 = await generateWAMessageFromContent(
            _0x2b8808[_0xc642c(0xd5)],
            {
              viewOnceMessageV2Extension: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 0x2,
                  },
                  interactiveMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                    "fromObject"
                  ]({
                    body: proto["Message"][_0xc642c(0x124)][_0xc642c(0x19d)][
                      _0xc642c(0xe5)
                    ]({ text: _0xc642c(0xe0) }),
                    carouselMessage: proto["Message"]["InteractiveMessage"][
                      _0xc642c(0x17f)
                    ]["fromObject"]({
                      cards: [
                        {
                          header: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                            _0xc642c(0x15c)
                          ][_0xc642c(0xe5)]({
                            hasMediaAttachment: !![],
                            ..._0x2a1957,
                          }),
                          nativeFlowMessage: proto[_0xc642c(0xa0)][
                            _0xc642c(0x124)
                          ][_0xc642c(0xf4)][_0xc642c(0xe5)]({
                            buttons: [
                              {
                                name: _0xc642c(0x111),
                                buttonParamsJson:
                                  _0xc642c(0x16d) +
                                  global[_0xc642c(0x85)] +
                                  "\x22}",
                              },
                            ],
                          }),
                        },
                        {
                          header: proto["Message"]["InteractiveMessage"][
                            _0xc642c(0x15c)
                          ][_0xc642c(0xe5)]({
                            hasMediaAttachment: !![],
                            ..._0x43064f,
                          }),
                          nativeFlowMessage: proto[_0xc642c(0xa0)][
                            _0xc642c(0x124)
                          ][_0xc642c(0xf4)][_0xc642c(0xe5)]({
                            buttons: [
                              {
                                name: _0xc642c(0x111),
                                buttonParamsJson:
                                  _0xc642c(0x95) + global["ovo"] + "\x22}",
                              },
                            ],
                          }),
                        },
                        {
                          header: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                            _0xc642c(0x15c)
                          ][_0xc642c(0xe5)]({
                            hasMediaAttachment: !![],
                            ..._0x1c1c02,
                          }),
                          nativeFlowMessage: proto[_0xc642c(0xa0)][
                            _0xc642c(0x124)
                          ][_0xc642c(0xf4)][_0xc642c(0xe5)]({
                            buttons: [
                              {
                                name: "cta_copy",
                                buttonParamsJson:
                                  _0xc642c(0xf0) +
                                  global[_0xc642c(0xa9)] +
                                  "\x22}",
                              },
                            ],
                          }),
                        },
                        {
                          header: proto["Message"]["InteractiveMessage"][
                            _0xc642c(0x15c)
                          ]["fromObject"]({
                            hasMediaAttachment: !![],
                            ..._0xf4efdd,
                          }),
                          nativeFlowMessage: proto["Message"][
                            "InteractiveMessage"
                          ]["NativeFlowMessage"][_0xc642c(0xe5)]({
                            buttons: [
                              {
                                name: _0xc642c(0x147),
                                buttonParamsJson:
                                  _0xc642c(0x126) +
                                  global[_0xc642c(0x18b)] +
                                  _0xc642c(0x17e),
                              },
                            ],
                          }),
                        },
                      ],
                    }),
                  }),
                },
              },
            },
            { userJid: _0x2b8808[_0xc642c(0xea)], quoted: _0x2ed300 }
          );
          await _0x16fafa[_0xc642c(0x1a1)](
            _0x2b8808["chat"],
            _0x1edf07[_0xc642c(0x173)],
            { messageId: _0x1edf07[_0xc642c(0xc3)]["id"] }
          );
        }
        break;
      case "done":
        {
          let _0x206593 = tanggal(Date[_0xc642c(0x129)]());
          if (!isOwner) return _0x309910("khusus\x20owner");
          let _0x338b03 = _0x444b6["split"](",");
          if (_0x338b03[_0xc642c(0x15a)] < 0x2)
            return _0x309910(
              _0xc642c(0xab) + (_0x4d7283 + _0x2bd536) + _0xc642c(0x93)
            );
          let _0x5a7046 = _0x338b03[0x0],
            _0x4bc477 = _0x338b03[0x1],
            _0x4b6033 =
              "\x0a───◆⧽\x20*MANZZY\x20STORE*\x20⧼◆───\x0a━━━━━━━━━━━━━━━\x0a*ALHAMDULILLAH\x20TRX\x20DONE*\x0a━━━━━━━━━━━━━━━\x0a*📦\x20BARANG\x20:*\x20" +
              _0x5a7046 +
              _0xc642c(0x13f) +
              _0x4bc477 +
              "\x0a*⏰\x20TANGGAL\x20:*\x20" +
              _0x206593 +
              _0xc642c(0x1a2),
            _0x1fa936 = generateWAMessageFromContent(
              _0x2b8808[_0xc642c(0xd5)],
              {
                viewOnceMessage: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 0x2,
                    },
                    interactiveMessage: proto[_0xc642c(0xa0)][_0xc642c(0x124)][
                      _0xc642c(0x106)
                    ]({
                      contextInfo: {
                        mentionedJid: [_0x2b8808[_0xc642c(0xea)]],
                      },
                      body: proto["Message"][_0xc642c(0x124)]["Body"][
                        _0xc642c(0x106)
                      ]({ text: _0x4b6033 }),
                      nativeFlowMessage: proto[_0xc642c(0xa0)][
                        "InteractiveMessage"
                      ]["NativeFlowMessage"][_0xc642c(0x106)]({
                        buttons: [
                          {
                            name: _0xc642c(0x147),
                            buttonParamsJson:
                              _0xc642c(0x12b) +
                              global[_0xc642c(0x73)] +
                              "\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}",
                          },
                          {
                            name: _0xc642c(0x147),
                            buttonParamsJson:
                              "{\x22display_text\x22:\x22Join\x20Grup\x22,\x22url\x22:\x22" +
                              global["linkGrup2"] +
                              _0xc642c(0x17e),
                          },
                          {
                            name: _0xc642c(0x147),
                            buttonParamsJson:
                              _0xc642c(0x134) +
                              global[_0xc642c(0x89)] +
                              _0xc642c(0x17e),
                          },
                        ],
                      }),
                    }),
                  },
                },
              },
              { userJid: _0x2b8808[_0xc642c(0xea)], quoted: _0x397982 }
            );
          await _0x16fafa[_0xc642c(0x1a1)](
            _0x1fa936[_0xc642c(0xc3)][_0xc642c(0xf7)],
            _0x1fa936["message"],
            { messageId: _0x1fa936["key"]["id"] }
          );
        }
        break;
      case _0xc642c(0x171):
        {
          let _0xe2d6c4 =
            "MANZZY\x20STORE\x20MENYEDIAKAN⚡\x0a>\x20-PANEL\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a>\x20-RESELLER\x20PANEL\x0a>\x20-ADMIN\x20PANEL\x20\x20\x20\x20\x20\x20\x0a>\x20-PT\x20PANEL\x0a>\x20-OWNER\x20PANEL\x0a>\x20-ADMIN\x20CH\x0a>\x20-SC\x20RAFATHAR\x20V3\x20ORI\x0a>\x20-SC\x20PUSH\x20KONTAK\x20\x0a>\x20-JASA\x20INSTALL\x20PANEL\x20\x0a>\x20-JASA\x20INSTALL\x20WINGS\x20\x0a>\x20-BOT\x20PUSH\x20KONTAK\x20\x0a>\x20-BOT\x20JAGA\x20GRUP\x0a>\x20-APK\x20SADAP\x20HP\x20JARAK\x20JAUH\x20(\x20SURXRAT\x20)\x0a";
          _0x309910(_0xe2d6c4);
        }
        break;
      case _0xc642c(0xda):
        {
          let _0x7d707e = _0xc642c(0x11e);
          _0x309910(_0x7d707e);
        }
        break;
      case _0xc642c(0x121):
        {
          let _0x4b6a6e = _0xc642c(0xbc);
          _0x309910(_0x4b6a6e);
        }
        break;
      case _0xc642c(0x14e):
        {
          let _0x1c8a87 = _0xc642c(0x196);
          _0x309910(_0x1c8a87);
        }
        break;
      case _0xc642c(0x154):
      case "owner": {
        await _0x16fafa[_0xc642c(0x193)](
          _0x2b8808[_0xc642c(0xd5)],
          [global[_0xc642c(0xd4)]],
          null
        );
      }
      case _0xc642c(0x186):
        {
          if (!_0x2f12a2) return;
          (_0x16fafa["public"] = ![]), _0x309910(_0xc642c(0x125));
        }
        break;
      case _0xc642c(0xdc):
        {
          let _0x1a2688 = speed(),
            _0x4967b6 = speed() - _0x1a2688,
            _0x5b910b = await nou["os"][_0xc642c(0x198)]();
          var _0x4e1d80 = await nou[_0xc642c(0xb3)][_0xc642c(0xf1)]();
          let _0x26051e =
            _0xc642c(0x1a9) +
            _0x5b910b +
            _0xc642c(0x167) +
            nou["os"]["ip"]() +
            _0xc642c(0xdf) +
            nou["os"]["type"]() +
            _0xc642c(0xc1) +
            formatp(os[_0xc642c(0x138)]()) +
            _0xc642c(0xdb) +
            formatp(os[_0xc642c(0x138)]() - os["freemem"]()) +
            "\x0a\x0a*Penyimpanan*\x0a•\x20Total:\x20" +
            _0x4e1d80[_0xc642c(0x78)] +
            "\x20GB\x0a•\x20Digunakan:\x20" +
            _0x4e1d80[_0xc642c(0x191)] +
            _0xc642c(0x145) +
            _0x4e1d80["usedPercentage"] +
            _0xc642c(0x194) +
            _0x4e1d80[_0xc642c(0x77)] +
            "\x20GB\x20>\x20" +
            _0x4e1d80[_0xc642c(0x109)] +
            "%\x0a\x0a•\x20Respon:\x20" +
            _0x4967b6[_0xc642c(0x10d)](0x4) +
            _0xc642c(0x92);
          await _0x309910(_0x26051e);
        }
        break;
      case "public":
        {
          if (!_0x2f12a2) return;
          (_0x16fafa[_0xc642c(0x96)] = !![]), _0x309910(_0xc642c(0x16b));
        }
        break;
      case "scbot":
      case "sc":
      case _0xc642c(0x8c):
        {
          let _0x34aa25 = _0xc642c(0x7c);
          _0x16fafa["relayMessage"](
            _0x2b8808[_0xc642c(0xd5)],
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: 0x1312d00,
                requestFrom: _0x2b8808[_0xc642c(0xea)],
                noteMessage: {
                  extendedTextMessage: {
                    text: _0x34aa25,
                    contextInfo: {
                      externalAdReply: { showAdAttribution: !![] },
                    },
                  },
                },
              },
            },
            {}
          );
        }
        break;
      default:
        if (_0x11ab06["startsWith"](">")) {
          if (!_0x2f12a2) return;
          try {
            let _0x38072e = await eval(_0x11ab06[_0xc642c(0x91)](0x2));
            if (typeof _0x38072e !== _0xc642c(0xa5))
              _0x38072e = require("util")[_0xc642c(0xac)](_0x38072e);
            await _0x309910(_0x38072e);
          } catch (_0x4429ea) {
            await _0x309910(String(_0x4429ea));
          }
        }
        _0x2b8808[_0xc642c(0x9e)][_0xc642c(0x18a)]() == _0xc642c(0xbe) &&
          _0x309910(_0xc642c(0xcf));
        if (_0x11ab06[_0xc642c(0xdd)]("=>")) {
          if (!_0x2f12a2) return;
          try {
            let _0x5ae87a = await eval(
              _0xc642c(0x164) + _0x11ab06["slice"](0x2) + _0xc642c(0x16f)
            );
            if (typeof _0x5ae87a !== _0xc642c(0xa5))
              _0x5ae87a = require(_0xc642c(0x88))[_0xc642c(0xac)](_0x5ae87a);
            await _0x309910(_0x5ae87a);
          } catch (_0x34479a) {
            await _0x309910(String(_0x34479a));
          }
        }
        if (_0x11ab06["startsWith"]("$")) {
          if (!_0x2f12a2) return;
          if (!_0x444b6) return;
          exec(_0x11ab06[_0xc642c(0x91)](0x2), (_0x36c129, _0xf25fb3) => {
            if (_0x36c129) return _0x309910("" + _0x36c129);
            if (_0xf25fb3) return _0x309910(_0xf25fb3);
          });
        }
    }
  } catch (_0x6e4c4b) {
    console[_0xc642c(0xef)](util["format"](_0x6e4c4b)),
      _0x16fafa["sendMessage"](
        _0xc642c(0xa2),
        {
          text: _0xc642c(0x71) + util[_0xc642c(0x12c)](_0x6e4c4b),
          contextInfo: { isForwarded: !![] },
        },
        { quoted: _0x2b8808 }
      );
  }
};
function _0x11dc() {
  const _0xfd6cf3 = [
    "\x0a*\x20*Total\x20Member\x20:*\x20",
    "\x0a*💸\x20NOMINAL\x20:*\x20",
    "waUploadToServer",
    "imageMessage",
    "Durasi\x20vidio\x20maksimal\x2015\x20detik!",
    "toUpperCase",
    "newsletterName",
    "\x20GB\x20>\x20",
    ".*\x20",
    "cta_url",
    "pushkontak1",
    "\x0a*\x20*ID\x20:*\x20",
    ".net",
    "{\x22display_text\x22:\x22Link\x20Tautan\x20Foto\x22,\x22url\x22:\x22",
    "chalk",
    "954283GlwUPd",
    "listvps",
    "\x0a\x0a*\x20Name\x20Channel\x0a",
    "1206955FqYqFw",
    "exports",
    "test",
    "includes",
    "developerbot",
    "find",
    "respon_pushkontak",
    "menu",
    "./src/media/gopay.jpg",
    "unlinkSync",
    "length",
    "Asia/Jakarta",
    "Header",
    "MANZZY\x20STORE",
    "https://chat.whatsapp.com/",
    "\x20Kontak*",
    "temptext",
    "uncaughtException",
    "shorturl",
    "buttonsMessage",
    "(async\x20()\x20=>\x20{\x20",
    "templateMessage",
    "resolve",
    "\x0a•\x20IP\x20Address:\x20",
    "./lib/screaper",
    "pushkontak",
    "map",
    "Berhasil\x20Beralih\x20Ke\x20Mode\x20Public",
    "writeFileSync",
    "{\x22display_text\x22:\x22Dana\x20Payment\x22,\x22id\x22:\x22123456789\x22,\x22copy_code\x22:\x22",
    "type",
    "\x20})()",
    "splice",
    "listproduk",
    "single_select",
    "message",
    "trim",
    "\x20Grup\x20Chat",
    "video/mp4",
    "\x20Member\x20Grup*",
    "Format\x20ID\x20Grup\x20Tidak\x20Valid",
    "push",
    "Format\x20Delay\x20Tidak\x20Valid",
    "singleSelectReply",
    "BEGIN:VCARD",
    "sendMessage",
    "\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}",
    "CarouselMessage",
    "17:52",
    "savekontak1",
    "data",
    "*\x20Yogyakarta\x20dan\x20sekitarnya_",
    "user",
    "videoMessage",
    "self",
    "3818200iVBqqW",
    "bold",
    "HH:mm:ss",
    "toLowerCase",
    "qris",
    "\x20Grup\x22,\x0arows:\x20",
    "Terbuka",
    "\x20Member\x20Grup*,\x20File\x20Contact\x20Berhasil\x20Dikirim\x20ke\x20Private\x20Chat",
    "10RsQwLn",
    "stringify",
    "usedGb",
    "*Contoh\x20Command\x20:*\x0a.pushkontak2\x20idgc|jeda|pesan\x0a\x0a*Note\x20:*\x20Jeda\x201\x20detik\x20=\x201000\x0aketik\x20*.listgc*\x20untuk\x20melihat\x20semua\x20list\x20id\x20grup",
    "sendContact",
    "%\x0a•\x20Tersedia:\x20",
    "{\x22display_text\x22:\x22Chat\x20Penjual\x22,\x22url\x22:\x22",
    "*🌟 PROMO VPS PREMIUM DIGITAL OCEAN 🌟*\n\n🚀 *Mulai dari 28K/Bulan!* 🚀\n\n📲 *HUBUNGI KAMI SEKARANG:*\n👉 https://wa.me/6285883812573\n\n🔧 *Pilihan Paket Terjangkau:*\n☁️ *RAM 1GB | 1 Core →* *28K*\n☁️ *RAM 2GB | 1 Core →* *55K*\n☁️ *RAM 2GB | 2 Core →* *69K*\n☁️ *RAM 4GB | 2 Core →* *87K*\n\n💎 *Pilihan Produk Premium dari Kami:*\n☁️ *RAM 8GB | 2 Core →* *143K*\n☁️ *RAM 8GB | 4 Core →* *156K*\n☁️ *RAM 16GB | 4 Core →* *189K*\n\n🔥 *Keunggulan Layanan Kami:*\n✅ *AMD Premium Hardware*\n✅ *Uptime Tinggi & Stabil*\n✅ *Support 24/7*\n✅ *Full Akses VPS*\n✅ *Garansi Layanan 15 Hari*\n\n💥 *Biaya Tambahan:* 💥\n🛠️ *Instalasi Panel Terima Beres → 10K*\n\n⚠️ *KETENTUAN PENGGUNAAN VPS:* ⚠️\n- ⚠️ *VPS Mokad Tergantung Penggunaan Anda.*\n- ⚠️ *Garansi Tidak Berlaku Jika Terkena DDoS.*\n- ⚠️ *Nego? Masih Bisa Berpikir, Boleh Asalkan Ngotak — GAK NGOTAK NO GARANSI.*\n- ⚠️ *VPS Mokad Sepenuhnya Tanggung Jawab Pengguna.*\n\n📜 *RULES PENGGUNAAN VPS:* 📜\n1️⃣ *Dilarang untuk kegiatan ilegal (phishing, scam, fraud, dll.)*\n2️⃣ *Dilarang menggunakan VPS untuk aktivitas DDOS atau sejenisnya.*\n3️⃣ *Dilarang meng-hosting konten ilegal seperti pornografi anak, malware, atau konten terlarang lainnya.*\n4️⃣ *Dilarang merusak sistem VPS atau server lain dalam jaringan.*\n5️⃣ *Dilarang menggunakan VPS untuk aktivitas yang melanggar hukum lokal maupun internasional.*\n6️⃣ *Dilarang menyebarkan spam melalui server VPS.*\n7️⃣ *Pengguna bertanggung jawab penuh atas keamanan dan penggunaan VPS.*\n8️⃣ *Melanggar salah satu aturan di atas akan mengakibatkan penangguhan layanan tanpa pengembalian dana.*\n\n💥 *Buruan! Stok Terbatas!* 💥\n📺 *YouTube:* https://www.youtube.com/@Pusat_Terbuka\n\n==============================",
    "idgrupnya\x0a\x0aketik\x20*.listgc*\x20untuk\x20melihat\x20semua\x20list\x20id\x20grup",
    "oos",
    "Private\x20Chat",
    "https://xnxx.com",
    "yt-search",
    "*-\x20[\x20Link\x20Grup\x20Terdeteksi\x20]*\x0a\x0a@",
    "Body",
    "seconds",
    "*ID\x20Grup*\x20tidak\x20valid!",
    "khusus\x20owner\x20saya",
    "relayMessage",
    "\x0a*📋\x20SERATUS\x20:\x20DONE✅*\x0a*ALL\x20TRX\x20NO\x20REF*\x0a━━━━━━━━━━━━━━━\x0a*NOTE:*\x0a*TERIMAKASIH\x20TELAH\x20ORDER\x20DI\x20~MANZZY\x20STORE~\x20JANGAN\x20LUPA\x20ORDER\x20LAGI\x20SEMOGA\x20JADI\x20LANGGANAN😇😇😇*",
    "File\x20Contact\x20Berhasil\x20Di\x20Buat✅",
    "groupInviteCode",
    "filter",
    "Sudah\x20keluar",
    "forwardedNewsletterMessageInfo",
    "Berikut\x20Adalah\x20Foto\x20Hasil\x20Result\x20Dari\x20*Tiktok\x20Slide*\x20⬇️",
    "\x0a*Informasi\x20Server*\x0a•\x20OS:\x20",
    "utf8",
    "*Fitur\x20Error\x20Terdeteksi*\x0a\x0a*Log\x20error\x20:*\x0a",
    "teks\x20dengan\x20mengirim\x20foto",
    "linkSaluran",
    "idch",
    "listgc",
    "linkOwner",
    "freeGb",
    "totalGb",
    "nowatermark",
    "isBotAdmin",
    "buttonsResponseMessage",
    "*#\x20Script\x20MANZZY\x20V1*\x0aScript\x20Ini\x20Di\x20Jual\x20Dengan\x20Harga\x20Rp20.000\x0aJika\x20Berminat\x20Silahkan\x20Chat\x20Developer\x20Bot\x20Ini\x0a\x0a*Contactv\x20:*\x20https://wa.me/6283190941023\x0a*_©\x20Credits\x20By\x20MANZZY_*",
    "groupMetadata",
    "*Tiktok\x20Downloader\x20✅*",
    "FN:WA[",
    "https://chat.whatsapp.com/JTE6C5AyONwJdhLFjFI75B",
    "\x0aPilih\x20Target\x20Grup\x20Pushkontak",
    "values",
    "messageContextInfo",
    "delayPushkontak",
    "dana",
    "https://www.youtube.com/@MANZZYSTORE",
    "0@s.whatsapp.net",
    "util",
    "linkGrup",
    "shortlink",
    "node-os-utils",
    "scriptbot",
    "durations",
    "Powered\x20By\x20MANZZY\x20STORE",
    "./lib/exif",
    "Update\x20",
    "slice",
    "\x20detik\x0a",
    "\x20barang,nominal",
    "[\x20Type\x20Chat\x20]:",
    "{\x22display_text\x22:\x22OVO\x20Payment\x22,\x22id\x22:\x22123456789\x22,\x22copy_code\x22:\x22",
    "public",
    "4623111czHUQz",
    "error",
    "get",
    "84SYODln",
    "entries",
    "fromMe",
    "teksnya",
    "text",
    "quoted",
    "Message",
    "unhandledRejection",
    "6283190941023@s.whatsapp.net",
    "Total\x20Member\x20:\x20",
    "status",
    "string",
    "join",
    "delayJpm",
    "contextInfo",
    "gopay",
    "./src/media/menu.jpg",
    "*Format\x20salah!*\x0a\x0aPenggunaan:\x0a",
    "inspect",
    "Bot\x20Pushkontak\x20PusatTerbuka",
    "image/jpeg",
    "groups",
    "toString",
    "status@broadcast",
    "duration",
    "drive",
    "moment-timezone",
    "jpm2",
    "151489WNNWvI",
    "@g.us",
    "keys",
    "\x20Kontak",
    "\x0a\x20*📡\x20Informasi\x20Data\x20Channel*\x0a\x0a*\x20ID\x20Channel\x0a",
    "./lib/uploader",
    "*🤖LIST\x20HARGA\x20PANEL\x20RUN\x20BOT\x20WA\x20BY\x20MANZZY🤖*\x0aRAM\x201\x20GB\x20Rp\x201.000/BULAN\x0aRAM\x202\x20GB\x20Rp\x202.000/BULAN\x0aRAM\x203\x20GB\x20Rp\x203.000/BULAN\x0aRAM\x204\x20GB\x20Rp\x204.000/BULAN\x0aRAM\x205\x20GB\x20Rp\x205.000/BULAN\x0aRAM\x206\x20GB\x20Rp\x206.000/BULAN\x0aRAM\x207\x20GB\x20Rp\x207.000/BULAN\x0aRAM\x208\x20GB\x20Rp\x208.000/BULAN\x0aRAM\x209\x20GB\x20Rp\x209.000/BULAN\x0aRAM\x2010\x20GB\x20Rp\x2010.000/BULAN\x0aRAM\x20UNLI\x20RP\x2012.000/BULAN\x0a\x0a*KEUNTUNGAN\x20BELI\x20PANEL\x20DI\x20MANZZY\x20STORE\x20👑*\x0a-BOT\x20ON\x2024\x20JAM\x20\x0a-ANTI\x20DELAY\x0a-HEMAT\x20PENYIMPANAN\x0a-HARGANYA\x20MURAH\x0a-BARANG\x20BERKUALITAS\x20\x0a-GA\x20BOROS\x20KUOTA\x0a-MENDAPATKAN\x20GARANSI\x2014\x20HARI\x0a-GARANSI\x201×\x20CLAIM\x20BAWA\x20BUKTI\x20TF\x20TRANSAKSI\x0a",
    "catch",
    "bot",
    "0\x20Seconds",
    "redBright",
    "\x0a\x0a*Ram\x20Server*\x0a•\x20Total:\x20",
    "IDR",
    "key",
    "Memproses\x20Mengirim\x20Pesan\x20Ke\x20*",
    "selectedId",
    "mimetype",
    "msg",
    "then",
    "\x20member\x0a",
    "listResponseMessage",
    "./src/media/qris.jpg",
"\x0a│─═⊱\x20*「\x20MENU\x20」*\x20─═⬣[⿻\x20\x0a║\x0a│┏⊱\x20LISTMENU\x0a│𖥂\x20.owner\x0a║𖥂\x20.self\x0a│𖥂\x20.public\x0a║𖥂\x20.pushkontak\x20\x0a│𖥂\x20.pushkontak1\x20\x0a║𖥂\x20.savekontak1\x20\x0a│𖥂\x20.listgc\x0a║𖥂\x20.cekidch\x0a│𖥂\x20.jpm1\x0a║𖥂\x20.jpm2\x0a│𖥂\x20.listproduk\x20\x0a║𖥂\x20.listhosting\x0a│𖥂\x20.listpanel\x0a║𖥂\x20.listvps\x0a│𖥂\x20.done\x0a║𖥂\x20.tiktok\x0a│𖥂\x20.payment\x0a║𖥂\x20.ping\x0a│𖥂\x20.ebook masih kosong belum ada handler/handling\x0a│┗⊱\x0a┗━━━━━━━━━━━[⿻\x0a",
    "[\x20Command\x20]:",
    "packname",
    "Bot\x20Online\x20✅",
    "12gjbNkl",
    "Memproses\x20Pengiriman\x20Pesan\x20Ke\x20",
    "dengan\x20kirim\x20media",
    "https://tinyurl.com/api-create.php?url=",
    "ownerUtama",
    "chat",
    "pushctc",
    "\x20Group\x20Chat",
    "shift",
    "./database/contacts.json",
    "listhosting",
    "\x0a•\x20Digunakan:\x20",
    "ping",
    "startsWith",
    "newsletterJid",
    "\x0a•\x20Type\x20OS:\x20",
    "Pilih\x20Payment\x20Pembayaran",
    "04:29",
    "Pesan\x20Berhasil\x20Dikirim\x20✅\x0aTotal\x20Pesan\x20:\x20",
    "pesannya",
    "999999999999999",
    "fromObject",
    "getQuotedObj",
    "selectedRowId",
    "Reply/Balas\x20Pesan\x20Yang\x20Diteruskan\x20Dari\x20Channel",
    "black",
    "sender",
    "autoshalat",
    "text/vcard",
    "getHours",
    "child_process",
    "log",
    "{\x22display_text\x22:\x22Gopay\x20Payment\x22,\x22id\x22:\x22123456789\x22,\x22copy_code\x22:\x22",
    "info",
    "PHOTO",
    "\x0a-\x20*Member\x20:*\x20",
    "NativeFlowMessage",
    "templateButtonReplyMessage",
    "isBaileys",
    "remoteJid",
    "4tuFgMX",
    "split",
    "toLocaleString",
    "\x20Member",
    "@s.whatsapp.net",
    "cache",
    "payment",
    "{\x20title\x20:\x20\x22Klik\x20Disini\x22,\x0asections:\x20[{\x0atitle:\x20\x22-\x20Total\x20Grup\x20Chat\x20:\x20",
    "announce",
    "url",
    "./src/message",
    "\x0a*`[!]\x20System\x20Notifikasi`*\x0a\x0aWaktu\x20*",
    "\x0a*\x20*Shortlink\x20by\x20tinyurl*\x0a",
    "nowatermark_hd",
    "create",
    "TEL;type=CELL;type=VOICE;waid=",
    "©\x20Copyright\x20-\x20",
    "freePercentage",
    "373191uwMplo",
    "owner",
    "selectedButtonId",
    "toFixed",
    "14HLHFIZ",
    "bgWhite",
    "idChannel",
    "cta_copy",
    "jpm1",
    "readFileSync",
    "caption",
    "conversation",
    "12:02",
    "hydratedTemplate",
    "participants",
    "1121466IlrEYE",
    "groupFetchAllParticipating",
    "contacts.vcf",
    "File\x20Kontak\x20Berhasil\x20Di\x20Buat\x20✅\x0aTotal\x20",
    "*Berhasil\x20Pushkontak\x20✅*\x0a-\x20Total\x20Pesan\x20:\x20",
    "*⚡MANZZY\x20STORE\x20OPEN\x20⚡*\x0a*>\x20RESELLER\x20PANEL=10K*\x0a[\x20KEUNTUNGAN\x20]\x0a-\x20BISA\x20JUALAN\x20PANEL\x0a-\x20BISA\x20JUALAN\x20BOT\x0a-\x20CREATE\x20PANEL\x20SEPUASNYA\x0a\x0a*>\x20ADMIN\x20PANEL=15K*\x0a[\x20KEUNTUNGAN\x20]\x0a-\x20BISA\x20JUALAN\x20PANEL\x0a-\x20BISA\x20JUALAN\x20BOT\x0a-\x20DIKASIH\x20SC\x20CPANEL\x0a-\x20BISA\x20BUAT\x20BOT\x20CPANEL\x0a-\x20BOLEH\x20OPEN\x20RESELLER\x20PANEL\x20\x0a\x0a*>\x20PT\x20PANEL\x20(\x20TERBATAS\x20)=20K*\x0a[\x20\x20KEUNTUNGAN\x20]\x20\x0a-\x20BISA\x20JUALAN\x20PANEL\x0a-\x20BISA\x20JUALAN\x20BOT\x0a-\x20DIKASIH\x20SC\x20CPANEL\x0a-\x20BISA\x20BUAT\x20BOT\x20CPANEL\x0a-\x20BOLEH\x20OPEN\x20RESELLER\x20PANEL\x0a-\x20BOLEH\x20OPEN\x20ADMIN\x20PANEL\x0a\x0a*>\x20OWNER\x20PANEL\x20(\x20TERBATAS\x20)=30K*\x0a[\x20\x20KEUNTUNGAN\x20]\x20\x0a-\x20BISA\x20JUALAN\x20PANEL\x0a-\x20BISA\x20JUALAN\x20BOT\x0a-\x20DIKASIH\x20SC\x20CPANEL\x0a-\x20BISA\x20BUAT\x20BOT\x20CPANEL\x0a-\x20BOLEH\x20OPEN\x20RESELLER\x20PANEL\x0a-\x20BOLEH\x20OPEN\x20ADMIN\x20PANEL\x0a-\x20BOLEH\x20OPEN\x20PT\x20PANEL\x0a",
    "participant",
    "14:49",
    "listpanel",
    "crypto",
    "white",
    "InteractiveMessage",
    "Berhasil\x20Beralih\x20Ke\x20Mode\x20Self",
    "{\x22display_text\x22:\x22\x20QRIS\x20Payment\x22,\x22url\x22:\x22",
    "endsWith",
    "watchFile",
    "now",
    "VERSION:3.0",
    "{\x22display_text\x22:\x22Testimoni\x22,\x22url\x22:\x22",
    "format",
    "decodeJid",
    "\x0a`</>\x20Contoh\x20Penggunaan\x20:`\x0a\x20Ketik\x20*",
    "isGroup",
    "subject",
    "./database/contacts.vcf",
    "https://telegra.ph/file/a059a6a734ed202c879d3.jpg",
    "\x20Maaf\x20pesan\x20kamu\x20saya\x20hapus,\x20karna\x20admin/ownerbot\x20telah\x20menyalakan\x20fitur\x20antilink\x20grup\x20lain!",
    "{\x22display_text\x22:\x22Sosmed\x20admin\x22,\x22url\x22:\x22",
    "END:VCARD",
    "sticker",
    "node-fetch",
    "totalmem",
    "./src/media/dana.jpg",
    "antilink",
    "jimp",
    "./lib/converter",
    "tiktok",
  ];
  _0x11dc = function () {
    return _0xfd6cf3;
  };
  return _0x11dc();
}
let file = require[_0x89ed04(0x166)](__filename);
function _0x42fa(_0x4a1716, _0x57dd6c) {
  const _0x11dcb7 = _0x11dc();
  return (
    (_0x42fa = function (_0x42fa79, _0x17023b) {
      _0x42fa79 = _0x42fa79 - 0x71;
      let _0x8ee3be = _0x11dcb7[_0x42fa79];
      return _0x8ee3be;
    }),
    _0x42fa(_0x4a1716, _0x57dd6c)
  );
}
fs[_0x89ed04(0x128)](file, () => {
  const _0x51a931 = _0x89ed04;
  fs["unwatchFile"](file),
    console[_0x51a931(0xef)](
      chalk[_0x51a931(0xc0)](_0x51a931(0x90) + __filename)
    ),
    delete require[_0x51a931(0xfd)][file],
    require(file);
});
