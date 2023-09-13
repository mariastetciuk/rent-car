import axios from "axios"




// const  fetch = async (page)=>{
// const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');
// url.searchParams.append('page', page);
// url.searchParams.append('limit', 8);
//     return await axios.get(url);
// }



async function fetch(page) {
    const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');
url.searchParams.append('page', page);
url.searchParams.append('limit', 8);

    return await axios.get(url);
  }

export default fetch;