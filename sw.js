importScripts('/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f0836e0c2c41c79a4890.js",
    "revision": "1d0df6d3e774272b29d1450550a61cd1"
  },
  {
    "url": "/_nuxt/layouts/default.6322c20f9b3c5f837cda.js",
    "revision": "fafbb4cd098cc2efc56b5f4287f74245"
  },
  {
    "url": "/_nuxt/manifest.f69498f4227601ea1566.js",
    "revision": "f3ae4b942acb8f058349341fc6a81a62"
  },
  {
    "url": "/_nuxt/pages/index.f1028fa6255a04408360.js",
    "revision": "11085593f0d5ded7ef4b346a43811794"
  },
  {
    "url": "/_nuxt/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





