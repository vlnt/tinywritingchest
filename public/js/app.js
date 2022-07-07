
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js',{scope: '/'})
      .then(function() {
        console.log('Service worker registered!')
      }).catch(function(e){
        console.log(e.message)
      })
  }

  