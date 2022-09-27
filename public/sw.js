STATIC_CACHE = 'v9'
DYNAMIC_CACHE = 'd5'

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(STATIC_CACHE);
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
        //"/static/js/bundle.js"//
      ])
    );
  });

  self.addEventListener("activate", (event) => {
   console.log('[Service Worker] Activating service worker...', event)
   event.waitUntil(caches.keys()
                   .then(function(keyList){
                    return Promise.all(keyList.map(function(key){
                      if(key !== STATIC_CACHE && key !== DYNAMIC_CACHE){
                        console.log('[Service Worker] Removing old cache...', key)
                        caches.delete(key)
                      }
                    }))
                   }))
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
                                   //console.log(res.json())
                            return caches.open(DYNAMIC_CACHE)
                            .then(function(cache){
                              cache.put(event.request.url, res.clone())
                              return res
                            })
                          }).catch(function(e){
                            return
                          })
                        }
                       }))
   });