import axios from "axios"

export async function getGallery(page) {
    const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');
url.searchParams.append('page', page);
url.searchParams.append('limit', 8);

    return await axios.get(url);
  }

 


