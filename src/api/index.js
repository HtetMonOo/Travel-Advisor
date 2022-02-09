import Axios from 'axios';

export const getPlacesData = async(type, sw, ne) => {
    try{
        const {data: {data}} = await Axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': 'd8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7'
                }
              });
        return data;
    }
    catch(error){
        console.log(error);
    }
}