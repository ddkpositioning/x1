'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "d81314486cd9efffd2628addb411ca58",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d81314486cd9efffd2628addb411ca58",
".git/objects/pack/pack-a859abd1b313a9b3b7b0be9525e9e37732e0f2bc.pack": "353d88eb69a3f93e874c5fa499d980b5",
".git/objects/pack/pack-a859abd1b313a9b3b7b0be9525e9e37732e0f2bc.idx": "38c66526f6abd42ac6269e1a9c9535c3",
".git/objects/45/1c8dd267f673f8a1916991b9e46d2f64d79a0f": "18ddd0ad540e50ccd00d06363847403e",
".git/objects/02/8aff83700802ef16b33feea9e455275cb6b166": "81b45955459792e3a8d5fb33f98331cf",
".git/objects/86/157acdf4846777c9de4132ffbe206c18417dfd": "eb1f93359cbdb825752cf98191ab288f",
".git/objects/f4/1f30d4c0d24bbbfbedd1ade237057300e114ed": "0eb71d9044b877d948586db329fcb9eb",
".git/packed-refs": "cffaea8627abc570ec2f4cc5e843c69e",
".git/logs/refs/remotes/origin/HEAD": "6c6a397317af800edd946c43aa6b59c5",
".git/logs/refs/remotes/origin/main": "becd6903a19513d6056d9fea99713b53",
".git/logs/refs/heads/main": "f82c8db3f2ed9644a3da320f8a821f00",
".git/logs/HEAD": "f82c8db3f2ed9644a3da320f8a821f00",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "06b2017e855e3ab0af51f7972ec8c135",
".git/gitk.cache": "1ac18e241ca60189d42fc89bfa56a993",
".git/FETCH_HEAD": "ed343f6da8f2cd62def7fbf3354c524f",
".git/index": "5af055f88e9ec7f539718aec5497888d",
"CNAME": "957972f3bf79b18e2755df6934cf1a92",
"main.dart.js": "a3bb39c71cf204ff358f2d4d3cf646b6",
"version.json": "383ed2888fd088d09c9b9536e990e1c5",
"assets/images/ddk_service_core.png": "ab6420ca0d2f5b724c1e52136152d5b7",
"assets/images/ddk_service_prime.png": "f92f1ee21c65beb3676f44be06cd5d8a",
"assets/images/ddk_service_max.png": "3cb7ea35a0c268c4657c135755c6a548",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "361815e4c4bf119b5668860fd92ac303",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "66de2b4e1a2bc62cb3af1cbbad714795",
"favicon.png": "7351f1849b15b7d495f4f155a75d04f0",
"icons/Icon-192.png": "72f3b8d26a81e8d86a19c3df8f05685c",
"icons/Icon-512.png": "54dc324b2e4c2fb0dd70a4d826462b14",
"manifest.json": "0591de686bd0386b6b9276b45ac05490",
"index.html": "d4091d8fd4980330b81047e656c6c781",
"/": "d4091d8fd4980330b81047e656c6c781"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
