import axios from "axios";
import errorHandler from './fetchErrorHandler';

export default {
    fetchAllData: async (cb)=> {
        try{

            const data = await axios.all([
                axios.get('http://localhost:4000/api/characters/read/1'),
                axios.get('http://localhost:4000/api/planets/read/1'),
                axios.get('http://localhost:4000/api/species/read/1'),
                axios.get('http://localhost:4000/api/starships/read/1'),
                axios.get('http://localhost:4000/api/vehicles/read/1'),
            ]);

            const mappedData = data.map((data)=>{
                return {
                    title: data.data[0].name,
                    category: data.config.url.split('/')[4],
                };
            });

            cb(mappedData);

        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchCharacterData: async (cb, page)=> {
        try{
            const characters = await axios.get(`http://localhost:4000/api/characters/read/${page}`);
            console.log(characters.data);
            cb(characters.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchCharacterDataByID: async (cb, id)=> {
        try{
            const person = await axios.get(`http://localhost:4000/api/characters/${id}`);
            cb(person.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchPlanetsData: async (cb, page)=> {
        try{
            const planets = await axios.get(`http://localhost:4000/api/planets/read/${page}`);
            cb(planets.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchPlanetDataByID: async (cb, id)=> {
        try{
            const planet = await axios.get(`http://localhost:4000/api/planets/${id}`);
            cb(planet.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchSpeciesData: async (cb, page)=> {
        try{
            const species = await axios.get(`http://localhost:4000/api/species/read/${page}`);
            cb(species.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchStarshipsData: async (cb, page)=> {
        try{
            const starships = await axios.get(`http://localhost:4000/api/vehicles/starships/${page}`);
            cb(starships.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchVehiclesData: async (cb, page)=> {
        try{
            const vehicles = await axios.get(`http://localhost:4000/api/vehicles/read/${page}`);
            cb(vehicles.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
}