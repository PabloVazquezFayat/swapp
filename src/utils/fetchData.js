import axios from "axios";

export default {
    fetchAllData: async (cb)=> {
        try{

            const data = await axios.all([
                axios.get('https://swapi.dev/api/people'),
                axios.get('https://swapi.dev/api/planets'),
                axios.get('https://swapi.dev/api/species'),
                axios.get('https://swapi.dev/api/starships'),
                axios.get('https://swapi.dev/api/vehicles'),
            ]);

            const filteredData = data.map((data)=>{
                return {
                    title: data.data.results[0].name,
                    category: data.config.url.split('/')[4],
                    count: data.data.count
                };
            });

            cb(filteredData);

        }catch(error){
            console.log(error);
        }
    },
    fetchPeopleData: async (cb)=> {
        try{
            const data = await axios.get('https://swapi.dev/api/people');
            cb(data.data);
        }catch(error){
            console.log(error);
        }
    },  
}