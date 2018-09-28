importScripts('/nuxt-onsen-app/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-onsen-app/_nuxt/app.97cb421acf53db851645.js",
    "revision": "f4e6798794271d0199dddf3fd417a466"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/manifest.3e17e6e76ba7a307fba5.js",
    "revision": "8b80c5d43a03cca8b78118fff0e54685"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/pages/index.64efe76deba8e7f1dbdc.js",
    "revision": "925f131e39595688d57bb86d56496d7e"
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





