//code related to contacting API and extracting information from it

import axios from 'axios';


const searchImages=async(term)=>{
    //HTTP request
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID PWMGSVpC83UXhl6-tZsitlO5522LwDcdmylrQR-k284'
        },
        params:{
            query:term
        }
    });
    return response.data.results;
}

export default searchImages;
