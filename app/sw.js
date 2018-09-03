/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
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
    'revision': 'bcada4604434fad0bc4c14e47a25fc8c',
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
    'revision': 'cb0d0ba94d882bd1cf6103ca5817ef6a',
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
    'revision': 'd93b53c756681a3877049ddfe1f124a5',
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
    'url': 'sw.js',
    'revision': '5c4a014803c8a478aeff3990700e5b5f',
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
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
