import { createApi } from 'unsplash-js'

const unsplash = createApi({ accessKey: 'w3fZVAUR6G3uUITPYA5MhBT7yAvBqCSQmUDK--RdXoM' })

const getPhotos = async ({ text, number = 10, orientation = 'portrait' }) => {
  const result = await unsplash.search.getPhotos({ query: text, perPage: number, orientation: orientation })

  if (result.errors) {
    // handle error here
    console.log('error occurred: ', result.errors[0])
  } else {
    const feed = result.response

    // extract total and results array from response
    const { total, results } = feed

    // handle success here
    console.log(`received ${results.length} photos out of ${total}`)
    console.log('first photo: ', results[0])
    return results
  }
}

export default getPhotos
