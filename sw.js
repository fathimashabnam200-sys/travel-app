const cacheName = 'travel-app-v1';
const assets = [
  '/',
  '/travel-app/index.html',
  '/travel-app/manifest.json',
  '/travel-app/company_profile.pdf',
  '/travel-app/tour_packages.pdf',
  '/travel-app/business_card.pdf'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Activate Service Worker
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => key !== cacheName ? caches.delete(key) : null)
    ))
  );
});

// Fetch cached files
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
