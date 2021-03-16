importScripts("precache-manifest.aac4c226ced61d2c2c327785efd7db57.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }
