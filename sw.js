importScripts('/nuxt-onsen-app/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-onsen-app/app.5e96b0af1f9e055160e6.js",
    "revision": "83c21ffe0b8386a5ff21d1ab557863b9"
  },
  {
    "url": "/nuxt-onsen-app/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "/nuxt-onsen-app/manifest.333cf6baee6a8dfddeb8.js",
    "revision": "1a49595de2d8be0924d6399dfcde8b1c"
  },
  {
    "url": "/nuxt-onsen-app/pages/index.b0dbcf1dc5110e3cd099.js",
    "revision": "cf8b4f5ccafc30815a16bb3c14e5fc2b"
  },
  {
    "url": "/nuxt-onsen-app/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/nuxt-onsen-app/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





