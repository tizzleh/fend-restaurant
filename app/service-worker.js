importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

// Trigger importScripts() for workbox.strategies and its dependencies:
const {
  strategies,
} = workbox;

self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.png', 'jpg', 'html', 'css', 'js')) {
    const cacheFirst = strategies.cacheFirst();
    event.respondWith(cacheFirst.makeRequest({
      request: event.request,
    }));
  }
});