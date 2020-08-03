import pageNotFound from '../components/PageNotFound/PageNotFound'

export default {
    fetchAllDataFallback: (error)=> {
        console.log(error);
    },

    fetchPeopleDataFallback: (error)=> {
        console.log(error);
    },

    fetchPeopleDataByIDfallback: (error)=> {
        if(error){
            return {
                status: true,
                page: pageNotFound()
            }
        }
    },

    fetchPlanetsDataFallback: (error)=> {
        console.log(error);
    },

    fetchStarshipsDataFallback: (error)=> {
        console.log(error);
    },

    fetchVehiclesDataFallback: (error)=> {
        console.log(error);
    }
}