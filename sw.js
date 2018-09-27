importScripts('/nuxt-onsen-app/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-onsen-app/_nuxt/app.1ee090416d6f9cbd411f.js",
    "revision": "bb2683ffbe41d5b0599705d33e668448"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/manifest.1b67a231d8ec1b3bcf1b.js",
    "revision": "c75a4da0c9f2936b20e176b4ba186699"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/pages/index.b0dbcf1dc5110e3cd099.js",
    "revision": "cf8b4f5ccafc30815a16bb3c14e5fc2b"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/nuxt-onsen-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-onsen-app/.*'), workbox.strategies.networkFirst({}), 'GET')





