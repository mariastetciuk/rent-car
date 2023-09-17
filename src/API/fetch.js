import axios from "axios"

export async function getGallery(page) {
    const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');
url.searchParams.append('page', page);
url.searchParams.append('limit', 8);

    return await axios.get(url);
  }

  export async function getGallerys() {
    const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');

    return await axios.get(url);
  }

 
export async function getFillter(params) {
    const url = new URL('https://64ff54faf8b9eeca9e2a00bf.mockapi.io/adverts');
url.searchParams.append('filter', `${params.make}`);


    return await axios.get(url);
  }



//   async function featch() {
    //         try {
    //             if(data.make === 'All make' || data.make === undefined) {
    //                 const result = await getGallerys();
                    
    //                 handleFillter(result.data);
                   
    //             } else{
    //                 const result  = await getFillter(data, page);
    //                 handleFillter(result.data);
            
    //             }
              
    
    //         const filtr =   gallary.filter(({ make }) => (make ? data.make === make : data.make))
    //         .filter(({ rentalPrice }) => {
    //           if (!data.price) return rentalPrice;
    //           rentalPrice = Number(rentalPrice.replace('$', ''));
    //           data.price = Number(data.price);
    
    //           return rentalPrice >= data.price && rentalPrice <= data.price + 9;
    //         })
    //         .filter(({ from }) => data.mileage > from)
    //         .filter(({ to }) => (to ? data.mileage < to : data.mileage));
    //         console.log(filtr);
    
    //         } catch (error) {
    //           console.log(error);
    //         }
    
    //     };
    // featch();