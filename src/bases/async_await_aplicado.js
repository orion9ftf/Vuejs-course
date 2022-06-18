import giphyApi from "./bases/axios"

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get('/random')).data
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

  
  } catch (error) {
    console.log('Error en esta petición', error)
    throw error
  }
}

getImage()