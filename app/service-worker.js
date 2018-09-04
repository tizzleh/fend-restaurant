self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-review-v1.2')
    .then(function(response) {
      response.addAll([
        '/',
        'images/400-1.jpg',
        'images/400-10.jpg',
        'images/400-2.jpg',
        'images/400-3.jpg',
        'images/400-4.jpg',
        'images/400-5.jpg',
        'images/400-6.jpg',
        'images/400-7.jpg',
        'images/400-8.jpg',
        'images/400-9.jpg',
        'images/600-1.jpg',
        'images/600-10.jpg',
        'images/600-2.jpg',
        'images/600-3.jpg',
        'images/600-4.jpg',
        'images/600-5.jpg',
        'images/600-6.jpg',
        'images/600-7.jpg',
        'images/600-8.jpg',
        'images/600-9.jpg',
        'images/800-1.jpg',
        'images/800-10.jpg',
        'images/800-2.jpg',
        'images/800-3.jpg',
        'images/800-4.jpg',
        'images/800-5.jpg',
        'images/800-6.jpg',
        'images/800-7.jpg',
        'images/800-8.jpg',
        'images/800-9.jpg',
        'images/hamburger.svg',
        'images/loop.sh',
        'images/touch/apple-touch-icon.png',
        'images/touch/chrome-touch-icon-192x192.png',
        'images/touch/icon-128x128.png',
        'images/touch/ms-touch-icon-144x144-precomposed.png',
        'index.html',
        'manifest.json',
        'data/restaurants.json',
        'restaurant.html',
        'restaurant.html?id=1',
        'restaurant.html?id=2',
        'restaurant.html?id=3',
        'restaurant.html?id=4',
        'restaurant.html?id=5',
        'restaurant.html?id=6',
        'restaurant.html?id=7',
        'restaurant.html?id=8',
        'restaurant.html?id=9',
        'restaurant.html?id=10',
        'scripts/dbhelper.js',
        'scripts/main.js',
        'scripts/restaurantinfo.js',
        'scripts/script.js',
        'scripts/sw/runtime-caching.js',
        'styles/main.css',
        'styles/responsive.css',
        'styles/styles.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});