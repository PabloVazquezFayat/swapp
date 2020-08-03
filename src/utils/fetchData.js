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
            cb(errorHandler(error));
        }
    },
    fetchPeopleData: async (cb)=> {
        try{
            const people = await axios.get('https://swapi.dev/api/people');
            cb(people.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchPeopleDataByID: async (cb, id)=> {
        try{
            const person = await axios.get(`https://swapi.dev/api/people/${id}`);
            cb(person.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchPlanetsData: async (cb)=> {
        try{
            const planets = await axios.get('http://swapi.dev/api/planets');
            cb(planets.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchPlanetDataByID: async (cb, id)=> {
        try{
            const planet = await axios.get(`https://swapi.dev/api/planets/${id}`);
            cb(planet.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchSpeciesData: async (cb)=> {
        try{
            const species = await axios.get('http://swapi.dev/api/species');
            cb(species.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchStarshipsData: async (cb)=> {
        try{
            const starships = await axios.get('http://swapi.dev/api/starships');
            cb(starships.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchVehiclesData: async (cb)=> {
        try{
            const vehicles = await axios.get('http://swapi.dev/api/vehicles');
            cb(vehicles.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
}