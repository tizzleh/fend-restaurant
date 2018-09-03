/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [{
    'url': 'data/restaurants.json',
    'revision': '500a3defff288a163f63f80b48025716',
  },
  {
    'url': 'favicon.ico',
    'revision': '1378625ad714e74eebcfa67bb2f61d81',
  },
  {
    'url': 'humans.txt',
    'revision': 'fc86bcfea9e4f1aafa5a8a98b559fe20',
  },
  {
    'url': 'images/400-1.jpg',
    'revision': '6217a46e5132f2be6079d5de8de40bce',
  },
  {
    'url': 'images/400-10.jpg',
    'revision': 'b10d8a6d0d8e208f993032ad63384a29',
  },
  {
    'url': 'images/400-2.jpg',
    'revision': '40c80ed605c341deac17d759d4657c79',
  },
  {
    'url': 'images/400-3.jpg',
    'revision': '33b52b522f4b7fbc4d9f5ba06f842c97',
  },
  {
    'url': 'images/400-4.jpg',
    'revision': 'e15cfaf2773c04697a38a27a64b593e4',
  },
  {
    'url': 'images/400-5.jpg',
    'revision': 'e5ef5db6fcc4d18202db26e27757a46f',
  },
  {
    'url': 'images/400-6.jpg',
    'revision': 'bf473e3b55e34aac9fc4bd52fe54398e',
  },
  {
    'url': 'images/400-7.jpg',
    'revision': '9c4659aad88d22e7f34a5fb31033ea02',
  },
  {
    'url': 'images/400-8.jpg',
    'revision': 'eddfa8f3f505e502c238032c87287e2d',
  },
  {
    'url': 'images/400-9.jpg',
    'revision': '8ba6e36ec075d51c5bd2d25671663505',
  },
  {
    'url': 'images/600-1.jpg',
    'revision': '57bc6f0755d23879be12953d8a1ecbb5',
  },
  {
    'url': 'images/600-10.jpg',
    'revision': '46679b4ddde451aeea63183b01a81785',
  },
  {
    'url': 'images/600-2.jpg',
    'revision': '0efc9a52cc336a9985b41aedba2f7c82',
  },
  {
    'url': 'images/600-3.jpg',
    'revision': '9187f984a96368a85c78ae2e33267c3c',
  },
  {
    'url': 'images/600-4.jpg',
    'revision': '30aa0f88f3244a2e877da61a70873769',
  },
  {
    'url': 'images/600-5.jpg',
    'revision': 'b67c1ab6fc79ae5a009e77701e58f76d',
  },
  {
    'url': 'images/600-6.jpg',
    'revision': '5713666cdab3f5b1c6fe3fbb8b0b45d9',
  },
  {
    'url': 'images/600-7.jpg',
    'revision': 'c4bb48c4ac6656464fecab0574c61ea5',
  },
  {
    'url': 'images/600-8.jpg',
    'revision': '0b3dbf669b5760b2c332a067af09b9bb',
  },
  {
    'url': 'images/600-9.jpg',
    'revision': '5479b6c69ca722d7a05ea1988d734fb5',
  },
  {
    'url': 'images/800-1.jpg',
    'revision': '85b4d3b9eed5d70999a925c6451a0fa6',
  },
  {
    'url': 'images/800-10.jpg',
    'revision': 'f0879eab2ab4b35e31a3954065067e09',
  },
  {
    'url': 'images/800-2.jpg',
    'revision': '6faba33df9d77505070218d410d3d014',
  },
  {
    'url': 'images/800-3.jpg',
    'revision': '24889ea0a53d1077a946bdc4c94f572e',
  },
  {
    'url': 'images/800-4.jpg',
    'revision': 'ac960714083c7f4388a4b85eca921005',
  },
  {
    'url': 'images/800-5.jpg',
    'revision': '0139dd036dcfcc60c13a95de36705ec5',
  },
  {
    'url': 'images/800-6.jpg',
    'revision': '30131eed412099606fb2ef0cdf29e2f1',
  },
  {
    'url': 'images/800-7.jpg',
    'revision': '14d7a076ad936072d768402b2b5c52fc',
  },
  {
    'url': 'images/800-8.jpg',
    'revision': 'c6345b668def13f12165492da1ca8938',
  },
  {
    'url': 'images/800-9.jpg',
    'revision': '8130af4956e6d683ed9418e6903d51d4',
  },
  {
    'url': 'images/hamburger.svg',
    'revision': 'd2cb0dda3e8313b990e8dcf5e25d2d0f',
  },
  {
    'url': 'images/loop.sh',
    'revision': '981cbfdd2c1457d2a1460a275a1e79fa',
  },
  {
    'url': 'images/touch/apple-touch-icon.png',
    'revision': '7326f54bfe6776293f08b34c3a5fde7b',
  },
  {
    'url': 'images/touch/chrome-touch-icon-192x192.png',
    'revision': '571f134f59f14a6d298ddd66c015b293',
  },
  {
    'url': 'images/touch/icon-128x128.png',
    'revision': '7c46d686765c49b813ac5eb34fabf712',
  },
  {
    'url': 'images/touch/ms-touch-icon-144x144-precomposed.png',
    'revision': '452d90b250d6f41a0c8f9db729113ffd',
  },
  {
    'url': 'index.html',
    'revision': '8f794262c53270b25b4d1019f6d87fdd',
  },
  {
    'url': 'manifest.json',
    'revision': '30d402e280a04e6fe03b32da34c70890',
  },
  {
    'url': 'manifest.webapp',
    'revision': 'daa5f08ad7c4c3e774d2224157b96a3f',
  },
  {
    'url': 'restaurant.html',
    'revision': '74eb1586aeeaa0a73723001f325649ed',
  },
  {
    'url': 'restaurant.html?id=1',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=2',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=3',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=4',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=5',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=6',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=7',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=8',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=9',
    'revision': '',
  },
  {
    'url': 'restaurant.html?id=10',
    'revision': '',
  },
  {
    'url': 'https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i4940260&2i6307648&2e1&3u16&4m2&1u360&2u400&5m6&1e0&5sen-US&6sus&10b1&12b1&14i1301875&key=AIzaSyAdlFJbHfXSdxy03hESWwqCu5z5xzEfCTw&token=1554restaurant.html?id=10',
    'revision': '',
  },
  {
    'url': 'robots.txt',
    'revision': '00733c197e59662cf705a2ec6d881d44',
  },
  {
    'url': 'scripts/dbhelper.js',
    'revision': '2591e92eb1bd034eaf6809332c073915',
  },
  {
    'url': 'scripts/main.js',
    'revision': '0c96ecbf2bb115ecb80391b74b62ed55',
  },
  {
    'url': 'scripts/restaurantinfo.js',
    'revision': '6fe1799aa7f2fc4848ad57ae8808c84c',
  },
  {
    'url': 'scripts/script.js',
    'revision': '2713362518bf5f4bc3b497735f4bd610',
  },
  {
    'url': 'scripts/sw/runtime-caching.js',
    'revision': 'ae67e46f5185a474b94c3c604203e5cc',
  },
  {
    'url': 'styles/main.css',
    'revision': 'dc3ac2775b89ab3eaacaa4d19441753b',
  },
  {
    'url': 'styles/responsive.css',
    'revision': '0d8d9119dfcdf686b17c1db82e1a54b4',
  },
  {
    'url': 'styles/styles.css',
    'revision': '6de54a4ca4b548253f7092de6bad52c3',
  },
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE)
    .then(cache => cache.addAll(PRECACHE_URLS))
    .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});