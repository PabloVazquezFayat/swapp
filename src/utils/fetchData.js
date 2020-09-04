import axios from "axios";
import errorHandler from './fetchErrorHandler';

export default {
    fetchAllData: async ()=> {
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

            return mappedData;

        }catch(error){
            return errorHandler(error);
        }
    },

    fetchCharacterData: async (page)=> {
        try{
            const characters = await axios.get(`http://localhost:4000/api/characters/read/${page}`);
            return characters.data
        }catch(error){
            return errorHandler(error);
        }
    },
    fetchCharacterDataByID: async (id)=> {
        try{
            const character = await axios.get(`http://localhost:4000/api/characters/${id}`);
            return character.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    createCharacterData: async (data)=> {
        try{
            const response = await axios.post('http://localhost:4000/api/characters/create', data);
            return response.data;
        }catch(error){
            return errorHandler(error)
        }
    },
    updateCharacterData: async (data)=> {
        try{
            const response = await axios.put('http://localhost:4000/api/characters/update', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },

    fetchPlanetsData: async (page)=> {
        try{
            const planets = await axios.get(`http://localhost:4000/api/planets/read/${page}`);
            return planets.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    fetchPlanetDataByID: async (id)=> {
        try{
            const planet = await axios.get(`http://localhost:4000/api/planets/${id}`);
            return planet.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    createPlanetData: async (data)=> {
        try{
            const response = await axios.post('http://localhost:4000/api/planets/create', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    updatePlanetData: async (data)=> {
        try{
            const response = await axios.put('http://localhost:4000/api/planets/update', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },

    fetchSpeciesData: async (page)=> {
        try{
            const species = await axios.get(`http://localhost:4000/api/species/read/${page}`);
            return species.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    fetchSpeciesDataByID: async (id)=> {
        try{
            const species = await axios.get(`http://localhost:4000/api/species/${id}`);
            return species.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    createSpeciesData: async (data)=> {
        try{
            const response = await  axios.post('http://localhost:4000/api/species/create', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    }
    ,
    updateSpeciesData: async (data)=> {
        try{
            const response = await axios.put('http://localhost:4000/api/species/update', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },

    fetchStarshipsData: async (page)=> {
        try{
            const starships = await axios.get(`http://localhost:4000/api/starships/read/${page}`);
            return starships.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    fetchStarshipsDataByID: async (id)=> {
        try{
            const starship = await axios.get(`http://localhost:4000/api/starships/${id}`);
            return starship.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    createStarshipData: async (data)=> {
        try{ 
            const response = await axios.post('http://localhost:4000/api/starships/create', data);
            return response.data;
        }catch(error){
            return errorHandler(error)
        }
    },
    updateStarshipsData: async (data)=> {
        try{
            const response = await axios.put('http://localhost:4000/api/starships/update', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },


    fetchVehiclesData: async (page)=> {
        try{
            const vehicles = await axios.get(`http://localhost:4000/api/vehicles/read/${page}`);
            return vehicles.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    fetchVehiclesDataByID: async (id)=> {
        try{
            const vehicle = await axios.get(`http://localhost:4000/api/vehicles/${id}`);
            return vehicle.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    createVehicleData: async (data)=> {
        try{
            const response = await axios.post('http://localhost:4000/api/vehicles/create', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },
    updateVehiclesData: async (data)=> {
        try{
            const response = await axios.put('http://localhost:4000/api/vehicles/update', data);
            return response.data;
        }catch(error){
            return errorHandler(error);
        }
    },
}