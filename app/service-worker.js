/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

let precacheConfig = [
  ["images/400-1.jpg", "6217a46e5132f2be6079d5de8de40bce"],
  ["images/400-10.jpg", "b10d8a6d0d8e208f993032ad63384a29"],
  ["images/400-2.jpg", "40c80ed605c341deac17d759d4657c79"],
  ["images/400-3.jpg", "33b52b522f4b7fbc4d9f5ba06f842c97"],
  ["images/400-4.jpg", "e15cfaf2773c04697a38a27a64b593e4"],
  ["images/400-5.jpg", "e5ef5db6fcc4d18202db26e27757a46f"],
  ["images/400-6.jpg", "bf473e3b55e34aac9fc4bd52fe54398e"],
  ["images/400-7.jpg", "9c4659aad88d22e7f34a5fb31033ea02"],
  ["images/400-8.jpg", "eddfa8f3f505e502c238032c87287e2d"],
  ["images/400-9.jpg", "8ba6e36ec075d51c5bd2d25671663505"],
  ["images/600-1.jpg", "57bc6f0755d23879be12953d8a1ecbb5"],
  ["images/600-10.jpg", "46679b4ddde451aeea63183b01a81785"],
  ["images/600-2.jpg", "0efc9a52cc336a9985b41aedba2f7c82"],
  ["images/600-3.jpg", "9187f984a96368a85c78ae2e33267c3c"],
  ["images/600-4.jpg", "30aa0f88f3244a2e877da61a70873769"],
  ["images/600-5.jpg", "b67c1ab6fc79ae5a009e77701e58f76d"],
  ["images/600-6.jpg", "5713666cdab3f5b1c6fe3fbb8b0b45d9"],
  ["images/600-7.jpg", "c4bb48c4ac6656464fecab0574c61ea5"],
  ["images/600-8.jpg", "0b3dbf669b5760b2c332a067af09b9bb"],
  ["images/600-9.jpg", "5479b6c69ca722d7a05ea1988d734fb5"],
  ["images/800-1.jpg", "85b4d3b9eed5d70999a925c6451a0fa6"],
  ["images/800-10.jpg", "f0879eab2ab4b35e31a3954065067e09"],
  ["images/800-2.jpg", "6faba33df9d77505070218d410d3d014"],
  ["images/800-3.jpg", "24889ea0a53d1077a946bdc4c94f572e"],
  ["images/800-4.jpg", "ac960714083c7f4388a4b85eca921005"],
  ["images/800-5.jpg", "0139dd036dcfcc60c13a95de36705ec5"],
  ["images/800-6.jpg", "30131eed412099606fb2ef0cdf29e2f1"],
  ["images/800-7.jpg", "14d7a076ad936072d768402b2b5c52fc"],
  ["images/800-8.jpg", "c6345b668def13f12165492da1ca8938"],
  ["images/800-9.jpg", "8130af4956e6d683ed9418e6903d51d4"],
  ["images/hamburger.svg", "d2cb0dda3e8313b990e8dcf5e25d2d0f"],
  ["images/loop.sh", "981cbfdd2c1457d2a1460a275a1e79fa"],
  ["images/touch/apple-touch-icon.png", "7326f54bfe6776293f08b34c3a5fde7b"],
  ["images/touch/chrome-touch-icon-192x192.png", "571f134f59f14a6d298ddd66c015b293"],
  ["images/touch/icon-128x128.png", "7c46d686765c49b813ac5eb34fabf712"],
  ["images/touch/ms-touch-icon-144x144-precomposed.png", "452d90b250d6f41a0c8f9db729113ffd"],
  ["index.html", "bcada4604434fad0bc4c14e47a25fc8c"],
  ["manifest.json", "30d402e280a04e6fe03b32da34c70890"],
  ["data/restaurants.json", ""],
  ["restaurant.html", "cb0d0ba94d882bd1cf6103ca5817ef6a"],
  ["restaurant.html?id=1", ""],
  ["restaurant.html?id=2", ""],
  ["restaurant.html?id=3", ""],
  ["restaurant.html?id=4", ""],
  ["restaurant.html?id=5", ""],
  ["restaurant.html?id=6", ""],
  ["restaurant.html?id=7", ""],
  ["restaurant.html?id=8", ""],
  ["restaurant.html?id=9", ""],
  ["restaurant.html?id=10", ""],
  ["scripts/dbhelper.js", "2591e92eb1bd034eaf6809332c073915"],
  ["scripts/main.js", "d93b53c756681a3877049ddfe1f124a5"],
  ["scripts/restaurantinfo.js", "6fe1799aa7f2fc4848ad57ae8808c84c"],
  ["scripts/script.js", "2713362518bf5f4bc3b497735f4bd610"],
  ["scripts/sw/runtime-caching.js", "ae67e46f5185a474b94c3c604203e5cc"],
  ["styles/main.css", "dc3ac2775b89ab3eaacaa4d19441753b"],
  ["styles/responsive.css", "0d8d9119dfcdf686b17c1db82e1a54b4"],
  ["styles/styles.css", "6de54a4ca4b548253f7092de6bad52c3"],
];
let cacheName = 'sw-precache-v3-fend-restaurant-' + (self.registration ? self.registration.scope : '');


let ignoreUrlParametersMatching = [/^utm_/];



let addDirectoryIndex = function(originalUrl, index) {
  let url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

let cleanResponse = function(originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  let bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function(body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

let createCacheKey = function(originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  let url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

let isPathWhitelisted = function(whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  let path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function(whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

let stripIgnoredUrlParameters = function(originalUrl,
  ignoreUrlParametersMatching) {
  let url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function(kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function(kv) {
      return ignoreUrlParametersMatching.every(function(ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function(kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


let hashParamName = '_sw-precache';
let urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    let relativeUrl = item[0];
    let hash = item[1];
    let absoluteUrl = new URL(relativeUrl, self.location);
    let cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              let request = new Request(cacheKey, {
                credentials: 'same-origin',
              });
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  let setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    let shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    let url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    let directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    let navigateFallback = '';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});
