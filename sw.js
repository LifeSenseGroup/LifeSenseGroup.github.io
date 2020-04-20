importScripts("precache-manifest.a9a2905c56092c6d72d6740e8a943101.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }
