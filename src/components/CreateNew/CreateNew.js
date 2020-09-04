import React, {useState, useEffect} from 'react'
import fetchData from '../../utils/fetchData'
import InputLabel from '../InputLabel/InputLabel'
import Input from '../Input/Input'
import InputSelect from '../InputSelect/InputSelect'
import InputSelectMultipleLabel from '../InputSelectMultipleLabel/InputSelectMultipleLabel'
import InputSelectMultiple from '../InputSelectMultiple/InputSelectMultiple'

export default function CreateNew(props) {


    const category = props.category;
    const [data, setData] = useState({});

    const dataObjects = {
        characters: {
            name: '',
            species: '',
            weapon: '',
            homeWorld: '',
            starship: [],
            vehicles: [],
            imageURL: '',
        },
        planets: {
            name: '',
            rotationPeriod: '',
            orbitalPeriod: '',
            diameter: '',
            climate: '',
            gravity: '',
            terrain: '',
            surfaceWater: '',
            population: '',
            imageURL: ''
        },
        species: {
            name: '',
            classification: '',
            designation: '',
            averageLifespan: '',
            language: '',
        },
        starships: {
            name: '',
            model: '',
            manufacturer: '',
            costInCredits: '',
            length: '',
            maxAtmospheringSpeed: '',
            crew: '',
            passengers: '',
            cargoCapacity: '',
            consumables: '',
            hyperdriveRating: '',
            starshipClass: '',
            imageURL: '',
        },
        vehicles: {
            
        }
    }

    const paths = {
        characters: 'createCharacterData',
        planets: 'createPlanetData',
        species: 'createSpeciesData',
        starships: 'createStarshipData',
        vehicles: 'createVehicleData'
    }

    useEffect(()=>{
        if(Object.keys(data).length === 0){
            setData(dataObjects[category]);
        }
    }, [data, setData, category, dataObjects]);

    console.log(data);

    const CharacterForm = ()=> {
        return  <div>
                    <InputLabel propertyName='Name'>Enter a NAME value</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="name" save={false}/>

                    <InputLabel propertyName='Homeworld'>Select a PLANET value</InputLabel>
                    <InputSelect data={{...data}} cb={setData} propertyName="homeWorld" endpoints={{options: 'fetchPlanetsData'}} default='Select Planet' save={false}/>

                    <InputLabel propertyName='Species'>Select a SPECIES value</InputLabel>
                    <InputSelect data={{...data}} cb={setData} propertyName="species" endpoints={{options: 'fetchSpeciesData'}} default='Select Species' save={false}/>

                    <InputSelectMultipleLabel data={{...data}} propertyName="starship" message="Select STARSHIP values" />
                    <InputSelectMultiple data={{...data}} cb={setData} propertyName="starship" endpoints={{options: 'fetchStarshipsData'}} save={false}/>

                    <InputSelectMultipleLabel data={{...data}} propertyName="vehicles" message="Select VEHICLES values" />
                    <InputSelectMultiple data={{...data}} cb={setData} propertyName="vehicles" endpoints={{options: 'fetchVehiclesData'}} save={false}/>

                    <img src={data.imageURL ? data.imageURL : '/imgs/man.png' } alt=''></img>
                </div>
    }

    const PlanetsForm = ()=> {
        return  <div>
                    <InputLabel propertyName='Name' >{data.name ? data.name : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="name" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Rotation Period' >{data.rotationPeriod ? data.rotationPeriod : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="rotationPeriod" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Orbital Period' >{data.orbitalPeriod ? data.orbitalPeriod : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="orbitalPeriod" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Diameter' >{data.diameter ? data.diameter : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="diameter" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Climate' >{data.climate ? data.climate : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="climate" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Gravity' >{data.gravity ? data.gravity : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="gravity" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Terrain' >{data.terrain ? data.terrain : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="terrain" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Surface Water' >{data.surfaceWater ? data.surfaceWater : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="surfaceWater" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Population' >{data.population ? data.population : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="population" endpoint="updatePlanetData"/>
                    
                    <InputLabel propertyName='Image' >{data.imageURL ? data.imageURL : undefined}</InputLabel>
                    <Input data={{...data}} cb={setData} propertyName="imageURL" endpoint="updatePlanetData"/>
                </div>
    }

    const createSaveButton = ()=> {
        if( 
            Object.keys(data).length > 0 && 
            data[Object.keys(data)[0]] !== undefined &&
            data[Object.keys(data)[0]].length > 0
        ){
            return  <button onClick={createNew}>Save</button>
        }
    }

    const createNew = async ()=> {
        const response = await fetchData[paths[category]](data);
        props.history.push(`/${category}/${response._id}`);
    }

    return (
        <div>
            {category === 'characters' && Object.keys(data).length > 0 ? CharacterForm() : null}
            {category === 'planets' && Object.keys(data).length > 0 ? PlanetsForm() : null}
            {createSaveButton()}
        </div>
    )
}
