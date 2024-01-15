import axios from "axios"

export async function getGallery(page) {
    const url = new URL('https://65a4fa0152f07a8b4a3e0ecd.mockapi.io/car/rentelCar');
url.searchParams.append('page', page);
url.searchParams.append('limit', 8);
    return await axios.get(url);
  }

  export async function getGallerys() {
    const url = new URL('https://65a4fa0152f07a8b4a3e0ecd.mockapi.io/car/rentelCar');

    return await axios.get(url);
  }

  export async function getFilter({make, price}) {
    const url = new URL('https://65a4fa0152f07a8b4a3e0ecd.mockapi.io/car/rentelCar');
    if(make)url.searchParams.append('make', make);
    if(price)url.searchParams.append('rentalPrice', price);
    

    return await axios.get(url);
  }


