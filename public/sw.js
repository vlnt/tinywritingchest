const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {

    console.log('[Service Worker] Installing service worker...', event)
    event.waitUntil(
      addResourcesToCache([
        "/",
        //"/index.html",
        //"/style.css",
        "/js/app.js",
        "/images/favicon.ico",
        "/images/inkpot.png",
        "/static/js/bundle.js"//
      ])
    );
  });

  self.addEventListener("activate", (event) => {
   console.log('[Service Worker] Activating service worker...', event)
   return self.clients.claim()
  });

  self.addEventListener("fetch", (event) => {
    //console.log('[Service Worker] Fetch event triggered in service worker...', event)
    event.respondWith(caches.match(event.request)
                       .then(function(response){
                        if(response){
                          return response
                        } else{
                          return fetch(event.request)
                          .then(function(res){
                            return caches.open('dynamic')
                            .then(function(cache){
                              cache.put(event.request.url, res.clone())
                              return res
                            })
                          })
                        }
                       }))
   });