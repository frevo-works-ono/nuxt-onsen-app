importScripts('https://frevo-works-ono.github.io/nuxt-onsen-app/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "https://frevo-works-ono.github.io/nuxt-onsen-app/app.95b23c2aade2181ef95e.js",
    "revision": "679b75fc24e942b5328df4b6b94425f6"
  },
  {
    "url": "https://frevo-works-ono.github.io/nuxt-onsen-app/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "https://frevo-works-ono.github.io/nuxt-onsen-app/manifest.5b1a9afc93f6b9da3c3a.js",
    "revision": "8b5061f06519473241693ca90dd5965a"
  },
  {
    "url": "https://frevo-works-ono.github.io/nuxt-onsen-app/pages/index.b0dbcf1dc5110e3cd099.js",
    "revision": "cf8b4f5ccafc30815a16bb3c14e5fc2b"
  },
  {
    "url": "https://frevo-works-ono.github.io/nuxt-onsen-app/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('https://frevo-works-ono.github.io/nuxt-onsen-app/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://frevo-works-ono.github.io/nuxt-onsen-app/.*'), workbox.strategies.networkFirst({}), 'GET')





