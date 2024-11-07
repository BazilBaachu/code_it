'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c307386c2525a409e8e2fdec9165595",
"assets/AssetManifest.bin.json": "cc76b52d81610044906bc6a5683316e4",
"assets/AssetManifest.json": "9df77231bff45eb44295ea5dea2b8c7c",
"assets/assets/font/digitalt.otf": "6f036a267ba45895feb6d59b7d0b8144",
"assets/assets/font/firacode.ttf": "016bcf67f409675ff98373081ba753dd",
"assets/assets/images/back_btn.png": "62ad0e500c7d18cf2a9cf8c3a8d334f4",
"assets/assets/images/broken-heart.gif": "bc79893ebec7fb98b948cbf7ce784e41",
"assets/assets/images/card_bg.png": "23a5815aac524909a1bd104def1a2fb6",
"assets/assets/images/celebrate.gif": "215eccf8d56c9548e228f49e1f19a8df",
"assets/assets/images/coin.png": "bb23f86729d1330a09382b8c044c6637",
"assets/assets/images/complete_btn.png": "d881cd16f795d6bd21da8ce94eb95900",
"assets/assets/images/Cup%2520gold.png": "26d9b49af0bac7d8a9326cfc6a581596",
"assets/assets/images/empty_heart.png": "cbb2b70cb502cb99cb5fecaf8f9efaa9",
"assets/assets/images/excellent.png": "b407e7ffcde2381872babb80a4ede6bf",
"assets/assets/images/failure.gif": "ab65cd7273a811cb39b9d7eafb0c3463",
"assets/assets/images/fire.png": "9852f3b15e6c1872fab514b4bd02ac7c",
"assets/assets/images/functions.png": "fca73029077adbd2a77f671e034fcdb8",
"assets/assets/images/heart.png": "0262260fc1c8affc0bd5eb957b8be541",
"assets/assets/images/heart_fill.png": "46d640926397c0c0dc2ccc5d08c9127b",
"assets/assets/images/hello.gif": "2c43700613ed92abfcf0945fe9a706c7",
"assets/assets/images/introduction.png": "2b9fcefa34951da322d6d7aa23cb635b",
"assets/assets/images/level-current.png": "14f33e3a9afde1e995686206150f815e",
"assets/assets/images/level-off.png": "2d793c42b957c863e34cdd0807f8a46d",
"assets/assets/images/level-on.png": "124d120ef8916853c0f87a8bd3a6471f",
"assets/assets/images/modal.png": "d0cb0d1e677787e78da5328a60f6ba71",
"assets/assets/images/next_btn.png": "acb1128c110d3f7dbb7c6bddc8788e1b",
"assets/assets/images/oops.png": "0e016c1aab1d236dc596246d811617c1",
"assets/assets/images/play_btn.png": "06621b69c10942a635290d83f101b728",
"assets/assets/images/Property%25201=disabled.png": "81e0ae0441f14dd795bafb3ab6461cff",
"assets/assets/images/retry_btn.png": "2c1a2e09397a99dde5299ea451c47c90",
"assets/assets/images/right_btn.png": "43df01c9178c744c38362282187d7e91",
"assets/assets/images/Screw%2520gold.png": "5ea33be9512e726be71e3916c4850258",
"assets/assets/images/settings_icon.png": "a58a0c7cf4002d968f956734f2a84784",
"assets/assets/images/skip_btn.png": "14948a3d30251e024bf7acb632f1a6e2",
"assets/assets/images/streak_lost.png": "b63f2d96983746ecf278ed2134324b81",
"assets/assets/images/streak_on.png": "72d1c6a6c6276a833cb198b0871be9d6",
"assets/assets/images/success.gif": "cff83c1465c52a96020cf2998a00e62d",
"assets/assets/images/takeaway_card.png": "d5dba7241610817f1bcf7efdf97e5eea",
"assets/assets/images/takeaway_title.png": "547d8c6e7f63c9e5ff173bea2d7eea4a",
"assets/assets/images/Tower%2520gold.png": "7b52f67a1b3a77518d5008c470949f9c",
"assets/FontManifest.json": "e2e05fc0ce98c6853cd21c27d3a41f60",
"assets/fonts/MaterialIcons-Regular.otf": "4ea977939aa5df05330a0ecd899fb4c8",
"assets/NOTICES": "f68f25de6178f7b2bb5eacdbca3d2aae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4a4148f61e4701e7c16a7fccec83dfe0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49b86b413e97cdec6445953d84d318fe",
"/": "49b86b413e97cdec6445953d84d318fe",
"main.dart.js": "fec55e25371058e9bf583fc8e9229303",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"version.json": "0648ce054e5b3361d7a3bb7e5fba864f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
