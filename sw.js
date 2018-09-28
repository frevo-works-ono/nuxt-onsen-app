importScripts('/nuxt-onsen-app/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-onsen-app/_nuxt/app.3ba5077cacbf4fa4aecd.js",
    "revision": "312352ca3266cb15d2511e55386e13ca"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/manifest.68432078e601b86b1cbf.js",
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





