importScripts("precache-manifest.3f74adc97a406369e72f4dcd42db8e04.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }
