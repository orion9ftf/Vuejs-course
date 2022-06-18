import axios from 'axios'

const apiKey = 'wtbGsPLEbf6NX0RYV22T3G2NWwHrSUFg'
// https://api.giphy.com/v1/gifs/random?api_key=

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//   .then(resp => resp.json())
//   .then(({ data }) => {
//       const { url } = data.images.original

//       const img = document.createElement('img')
//       img.src = url

//       document.body.append( img )
//   })

  // sin axios

  const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
      api_key: apiKey
    }
  })

export default giphyApi

  giphyApi.get('/random')
    .then(resp => {
      //console.log(resp.data.data.images.original.url)

      //extraer url
      const { data } = resp.data
      const { url } = data.images.original

      console.log(data)
      console.log('la url con destructuración', url)

      const img = document.createElement('img')
      img.src = url 

      document.body.append(img)
    })


