importScripts("/precache-manifest.3331e461a89aa4cea45004581ad3bda6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }
