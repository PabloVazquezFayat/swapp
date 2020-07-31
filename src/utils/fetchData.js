import axios from "axios";

export default {
    fetchPeopleData: async (cb)=> {
        try{
            let data = await axios.get('https://swapi.dev/api/people');
            cb(data.data);
        }catch(error){
            console.log(error);
        }
    },  
}