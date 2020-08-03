import axios from "axios";
import errorHandler from './fetchErrorHandler';

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

            const mappedData = data.map((data)=>{
                return {
                    title: data.data.results[0].name,
                    category: data.config.url.split('/')[4],
                    count: data.data.count
                };
            });

            cb(mappedData);

        }catch(error){
            errorHandler.fetchAllDataFallback(error);
        }
    },
    fetchPeopleData: async (cb)=> {
        try{
            const people = await axios.get('https://swapi.dev/api/people');
            cb(people.data);
        }catch(error){
            errorHandler.fetchPeopleDataFallback(error);
        }
    },
    fetchPlanetsData: async (cb)=> {
        try{
            const planets = await axios.get('http://swapi.dev/api/planets');
            cb(planets.data);
        }catch(error){
            errorHandler.fetchPlanetsDataFallback(error);
        }
    },
    fetchSpeciesData: async (cb)=> {
        try{
            const species = await axios.get('http://swapi.dev/api/species');
            cb(species.data);
        }catch(error){
            errorHandler.fetchSpeciesDataFallback(error);
        }
    },
    fetchStarshipsData: async (cb)=> {
        try{
            const starships = await axios.get('http://swapi.dev/api/starships');
            cb(starships.data);
        }catch(error){
            errorHandler.fetchStarshipsDataFallback(error);
        }
    },
    fetchVehiclesData: async (cb)=> {
        try{
            const vehicles = await axios.get('http://swapi.dev/api/vehicles');
            cb(vehicles.data);
        }catch(error){
            errorHandler.fetchVehiclesDataFallback(error);
        }
    },
}