if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js',{scope: '/'})
      .then(function() {
        console.log('Service worker registered!')
      }).catch(function(e){
        console.log(e.message)
      })
  }

  // fetch('https://httpbin.org/ip')
  // .then(response => {
  //   console.log(response)
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  // }).catch((e) => {
  //   console.log(e)
  // })

  // fetch('https://httpbin.org/post', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     mode: 'cors', 
  //     body: JSON.stringify({message: 'Does this work?'})
  // })
  // .then(response => {
  //   console.log(response)
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  // }).catch((e) => {
  //   console.log(e)
  // })