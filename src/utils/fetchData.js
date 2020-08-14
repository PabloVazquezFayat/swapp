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
                    imageURL: data.imageURL,
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
            cb(characters.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchCharacterDataByID: async (cb, id)=> {
        try{
            const character = await axios.get(`http://localhost:4000/api/characters/${id}`);
            cb(character.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    updateCharacterData: async (cb, data)=> {
        try{
            await axios.put('http://localhost:4000/api/characters/update', data);
            cb('');
        }catch(error){
            cb(errorHandler(error))
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
    updatePlanetData: async (cb, data)=> {
        try{
            await axios.post('http://localhost:4000/api/planets/update', data);
            cb('');
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
    fetchSpeciesDataByID: async (cb, id)=> {
        try{
            const species = await axios.get(`http://localhost:4000/api/species/${id}`);
            cb(species.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    updateSpeciesData: async (cb, data)=> {
        try{
            await axios.post('http://localhost:4000/api/species/update', data);
            cb('');
        }catch(error){
            cb(errorHandler(error));
        }
    },

    fetchStarshipsData: async (cb, page)=> {
        try{
            const starships = await axios.get(`http://localhost:4000/api/starships/read/${page}`);
            cb(starships.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    fetchStarshipsDataByID: async (cb, id)=> {
        try{
            const starship = await axios.get(`http://localhost:4000/api/starships/${id}`);
            cb(starship.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    updateStarshipsData: async (cb, data)=> {
        try{
            await axios.post('http://localhost:4000/api/starships/update', data);
            cb('');
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
    fetchVehiclesDataByID: async (cb, id)=> {
        try{
            const vehicle = await axios.get(`http://localhost:4000/api/vehicles/${id}`);
            cb(vehicle.data);
        }catch(error){
            cb(errorHandler(error));
        }
    },
    updateVehiclesData: async (cb, data)=> {
        try{
            await axios.post('http://localhost:4000/api/vehicles/update', data);
            cb('');
        }catch(error){
            cb(errorHandler(error));
        }
    },
}