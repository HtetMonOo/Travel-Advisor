import Axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'd8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7'
    }
  };

export const getPlacesData = async() => {
    try{
        const response = await Axios.get(URL, options);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}