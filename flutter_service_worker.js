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
".git/refs/heads/main": "2c0809967f9350798f32847c49fbcdba",
".git/refs/remotes/origin/main": "2c0809967f9350798f32847c49fbcdba",
".git/objects/9f/f5edbcbd875285f8d5f306094f04e9a5fed9b9": "c42dd9f06fb399a937d82bbe4fb50e5c",
".git/objects/9f/00a184345c308e22fe3357ed2a657260438e56": "bf8d725952f03f8e032311839644d247",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/b8/718ab70b89f047622cd725f3267e1340b03869": "3196081feb9a1d63e91062125e6da60d",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/4f/43018ffc2b284f5966c61003baf44399391e59": "288748c680980905e50ce0719a0a8f35",
".git/objects/4b/5c21205713ab83c19858b2a10eb2c838154472": "f846f0a0c738ca3ea297dfc079aa65bf",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/6f3210b5a28da73a017db6bdeb1c5944dd1eb3": "a6c3dc90f39473d5e922f5b1ef191262",
".git/objects/36/5f64fc5bcbb3621c5b456d5275f7e68af5b315": "57c3a78b67d19ac6c8899770d40df86e",
".git/objects/36/64ba50189502bbf8625d9d03eabd7b2b9970b1": "a51fac532f59692501f2ad624a368252",
".git/objects/f9/aeb75b5c3f4fcb5d21bc484797890c256e9408": "57516e55c3e8c79f19aa0876177b52af",
".git/objects/f9/2357a5975e7440d36f7cdfc4f46cf5f13748cc": "3037a71254fb0b93d4454bdcfeb7ff8f",
".git/objects/5a/8c002f0868d4dde2566d379823b98ddc988193": "b7259c63a9313e7b90b93688a9ceab09",
".git/objects/5a/5b2f354a16559e80ed8e45fd8081a4a30e0e47": "062053bae1e4d325f87e018ec059c21d",
".git/objects/6d/be8c740abb1c63aa2e53b9af9f27a6853429c6": "ad999c7736df47fd40150b9d3553ea45",
".git/objects/6f/687c40ae989bc4ae8f17823ebb33f2bd2c4223": "0f2d07f7e74a10d2eee7e6ad1a8e587d",
".git/objects/66/e4c322bded32f6275d0dedaa5cf42f2903b614": "dad70782a029d7b6b459a94a673a3705",
".git/objects/0b/93acc4c6a4ec20a05490d521ba96fd277a35ec": "7f95b9736f178a3a2687a9a5895be694",
".git/objects/7d/04f7d72a60ffa90ba5e800715b1f8363667286": "7ec01c9b92d18c6f0e9d21fa40a2b4d1",
".git/objects/0e/28ddff4922e2a95d85bbda4540c98065d63bc4": "16fd9e52efeaa76725d053cf3df85e23",
".git/objects/8c/327bee1b9d15f7981280e8fbfd30e87acc8b92": "a6e5d4e9d3f10ffa94653b9c03c46fa7",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/97/cec5b228246b5ed60673f5277daa9286cf86dc": "78b3821de566ffb38717b8d635cdc28a",
".git/objects/fb/8e671913e4d9777e685c4cefe721d4380b7d38": "c3bba5c9f90f3e4155f36297f830fd9d",
".git/objects/94/1c15c1a06aa9c5a687926b04c4dcfdc7684a9b": "11ff55430f2bc12cb2b445fe6c293df1",
".git/objects/c8/f4ecc8f2bfb68008c65aac5021e79dab262cca": "107a9ab0aec5e53934bcef0f72bf0c0b",
".git/objects/c8/2090c8b4cd66bf918185a9ff27aad4456602ef": "07d43a81825de278dda8b4e09de2acee",
".git/objects/dc/74c634ef0e86f64acb4f5a9001e6f01477fea2": "e9174aa33a8e7286089490f1c1cd2a10",
".git/objects/d1/f6c7ab8e5e89787beb935de80191ac3b917a2d": "3a5b6e230695a7077408be12438265f0",
".git/objects/cc/aa4a7a946747159c2453dbaab60c961d010021": "c0196deacaf0fcaa90a9c84a466282b4",
".git/objects/cc/77cfa0d828b7f354f25baa67a0a3fd194a86d8": "b01964fef46085ee6bad0b32136502df",
".git/objects/06/28c8567aa414bb65715c1175a28c97db8ce0df": "27f38beadc7632b6ff9d15792f059e8f",
".git/objects/d7/42b78a5dafdf7c72b50f6c39fdc8841b58011f": "1afa5f5d574c67ff100f0062e5eacb40",
".git/objects/26/641ab742495cd6caae665352af65c168a4cb65": "f38f68db62c8a4b3e7b03ecc56055f2a",
".git/objects/52/e2051d7f7ed42eb681a3819227b4d4c99c2c61": "daf53e83cf96aab668df6b818dd2ae87",
".git/objects/52/df4279482625a182abba97f805958cb67e2f7a": "b7f3554602af84d6811df88cc20250a1",
".git/objects/6b/b3fda41cfd383680004d0fc58320a0df567500": "25fcc75ee9b6398e1ec14e0c8e8922ad",
".git/objects/6b/365d1bae22c463c9125c5fc6a478cfd7936885": "e563d84dcbf65a45faee3ae6ca2d49b7",
".git/objects/fa/a4d6fd05d2715e5e5ad409e4d6fbd72786b7e5": "6476fa365d80e68e39a7187fef61be0e",
".git/objects/f1/000650d1e84991b9d1b9240d028411ac3b41d0": "fb54cae91b6ee756885ee04c23a68de0",
".git/objects/10/accf05102b50b25b9ae3f856fb218e20782ca1": "8e483b1b57a04ab3f0c9ae8da7c2b7e0",
".git/objects/70/933c8a7629169d2ca34856c370d53e5b70feda": "49b7757816938dfa9fed722cbc31ebaa",
".git/objects/01/8e1e586235ada295aad037700425700f133f88": "54fc6036b465aa60a855678f7f023cda",
".git/objects/80/6c7824e69a3334696069b5eabdcd4e864fe762": "af8c10304414ac0c68354b32cf0a6b18",
".git/objects/72/f2e9818a2d0db2f05d62236ce8a4876c2fa301": "825836f369caa3c516977d40b56331d9",
".git/objects/81/a7615b15709b40c0a767fec69ce4caa6222872": "c7c23888f7d1e09726d68ef494276a7d",
".git/objects/d6/cb3b880a2e4f506bd0d8f29543682c7301cbd3": "e3ad4066577fb19a7dd065dc03e93b42",
".git/objects/d6/25b0a598ac85172b88a0929686541bb2ad4955": "768796406c8ebbca6b4873bf3decc581",
".git/objects/e2/fe3b80486bd852c0dbc42667fbe7bc0de4ab02": "1dedbfe791694748fbf00c7cf696b20b",
".git/objects/e7/aea16c39550194e9828eedc69337215f813acf": "244f0efaabee8633b2f41b10f7fb0eb6",
".git/objects/e7/8a75226f410df2152f27a63d48d859a2a20ebc": "a61b8b5ccb4d4ff0103abbae14f5adde",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/4721086ef867192771b55e3a59e1a6189c8a78": "b6cdc21d3e59ce015fd5f492d81da904",
".git/objects/96/c277742c2b8937b658ef7d1443f3e55d2a9e75": "c14eaae168ffc64548ae3f5bc17e07de",
".git/objects/a6/c0a4bb313894d4e1950c6401b37abb94615388": "4c1584e1080839fdfe0ce88cb73280e5",
".git/objects/85/b08aa25ab426de38c42a9a665594d5d3b6a203": "6546bf40b6b6a603ae07707642e2dc01",
".git/objects/ce/80e4fca0c692f83f10561231db43e30bb26c9c": "8f08887eaf1f1bb0799af600a7b52cee",
".git/objects/b5/aaa77e24d8382bd8109beee15f2c8c357f1b76": "4d25dbdfd54364cbd282ba9fc2bf6c89",
".git/objects/53/ee1dd7ec3bf88f62b385a3764955b8db420e66": "68d15b7de9c44fabfcab7b2b22f36acf",
".git/objects/53/8ff64f2f4996c994e00ccb81df7b1c7efbc0e3": "6c05e0aeaba4adefab9091e978cd3d23",
".git/objects/07/4e5c1ff2cd35ffa1da7dc9ad971258a6ce15df": "f5574ee502d97629ed6fa36e19f319ec",
".git/objects/5c/1097dd2e0472c03e24c73f353fcf84441035c0": "51c0238c1a5c1db35d556645a21e5f0b",
".git/objects/ab/1739cf25abecfbea7fb041b0d1774ed9b1aa87": "33fe6e68e5666182854db226248a3d25",
".git/objects/c0/6b00f32f0baa8fc8bf5d79b2866b4a4b12ffc0": "aa1d224ad08ba83dbc15cef4c16873a4",
".git/objects/47/1c2efaa00f273c9a50c14613f8275a812aa377": "cc236803733224e1a8468ecd9fa2414f",
".git/objects/e3/c280d84d04e89c6c118e423ed8d8550044d6af": "6dc7033323d49d1de3d73a30819ef4aa",
".git/objects/61/27d9b25444a1a26d93e71c44b6eb9ae7bf78c9": "936f0fa57ca17344eecd5c316d145d4a",
".git/objects/e1/3d407d2fbbf7023bd6db1245f015adfbc2dc6e": "48ee2ff27dd3f7af2e4716f9a66eaba3",
".git/objects/67/933335fb967dd299c95570a9c51cfa4ed040a0": "7e5f745a4b52c5c5734bd989f30c0b4f",
".git/objects/46/f7cc2e78f68cce62223821d71c9d3846208b64": "ce659b9242ea750b6c18dfa45546a2b6",
".git/objects/30/35730acf0a4bddaf15941262ad0d5f792b4d46": "e58a87589e62178b91a773e829b2a6dd",
".git/objects/de/7570aa64cbb3d5b0c3621f9cb7fa51ebf280d3": "6fed71a6b450af4288cecdcfbe9ccab3",
".git/objects/f3/e780d0452f65b5f7e19ce01c62d300f317f87c": "2cfa437fa0f1c7eaa35061dc12017729",
".git/objects/e5/e42053d83d1d6f1d49847aa87d60a46c8e599d": "b0b64bace17b467cae2bc86fc967c48f",
".git/objects/d3/ee0bd22877b37483569305456778983189d171": "a31c23ecf469d42810c9636cc91d6b8d",
".git/logs/HEAD": "041927e9af8e95532f998c0004e6e7bb",
".git/logs/refs/heads/main": "a3726e0d84a217e4569f1f01814cbdf8",
".git/logs/refs/remotes/origin/main": "aa0d781c1574af72780b9787a5471bb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "f722aa5dd2b9fe2b50eb06743bc5ffa6",
".git/FETCH_HEAD": "6d93748f3db7bd52299415e110aca68f",
".git/gitk.cache": "81c9e20aef14d29e78c7c90470b033be",
".git/ORIG_HEAD": "9f603e7da8b9ab32b0cb6a821401907a",
".git/index": "10fe4f9f0c230bec0414291d1fdbd51f",
"CNAME": "957972f3bf79b18e2755df6934cf1a92",
"main.dart.js": "ba63a59b0e1b5b243e935a860d05e49a",
"version.json": "383ed2888fd088d09c9b9536e990e1c5",
"assets/images/ddk_service_core.png": "ab6420ca0d2f5b724c1e52136152d5b7",
"assets/images/ddk_service_prime.png": "f92f1ee21c65beb3676f44be06cd5d8a",
"assets/images/ddk_service_max.png": "3cb7ea35a0c268c4657c135755c6a548",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "361815e4c4bf119b5668860fd92ac303",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "15e38348b9102b209b5306c7a50f0945",
"favicon.png": "7351f1849b15b7d495f4f155a75d04f0",
"icons/Icon-192.png": "72f3b8d26a81e8d86a19c3df8f05685c",
"icons/Icon-512.png": "54dc324b2e4c2fb0dd70a4d826462b14",
"manifest.json": "0591de686bd0386b6b9276b45ac05490",
"index.html": "2d03a70a3b6cd4a7ac8e240ee86aa425",
"/": "2d03a70a3b6cd4a7ac8e240ee86aa425"
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
