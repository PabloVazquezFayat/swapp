import React, {useState, useEffect} from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'
import InputSelectMultipleLabel from '../InputSelectMultiple/InputSelectMultiple'
import InputSelect from '../InputSelect/InputSelect'
import InputSelectMultiple from '../InputSelectMultiple'

export default function CreateNew(props) {

    const [data, setData]= useState('');
    const [options, setOptions] = useState('');
    const [checks, setChecks] = useState('');

    const createInputs = ()=> {
        // this will need a property name
    }

    const createOptions = ()=> {
        // this will need a property name
        // and an endpoint to populate the available options
    }


    const createCheckboxes = ()=> {
        // this will need a property name
        // and an enpoint to populate the available options
    }

    const createInputForm = ()=> {
        // returns all possinle inputs, selections, and checkboxes
    }

    const getData = async ()=> {
        //get all neccessary data from the api to pouplate all options
        const optionsRes = props.options ? await fetchData[props.options.endpoint](props.options.page) : null;
        const checksRes = props.checks ? await fetchData[props.checks.endpoint](props.checks.page): null;

        setOptions(optionsRes);
        setChecks(checksRes);
    }

    const createNew = async ()=> {
        const response = await fetchData[props.endpoints.create](data);
        setData(response);
    }

    useEffect(()=> {
        getData();
    })


    return (
        <div>
            <InputLabel propertyName='Name'>{data.name ? data.name : undefined}</InputLabel>
            <Input data={{...data}} cb={setData} propertyName="name" endpoint="updateCharacterData"/>

            <InputLabel propertyName='Homeworld'>{data.homeWorld ? data.homeWorld.name : undefined}</InputLabel>
            <InputSelect data={{...data}} cb={setData} propertyName="homeWorld" endpoints={{options: 'fetchPlanetsData', update: 'updateCharacterData'}} default='Select Planet'/>

            <InputLabel propertyName='Species'>{data.species ? data.species.name : undefined}</InputLabel>
            <InputSelect data={{...data}} cb={setData} propertyName="species" endpoints={{options: 'fetchSpeciesData', update: 'updateCharacterData'}} default='Select Species'/>

            <InputSelectMultipleLabel data={{...data}} propertyName="starship" message="No starships found" />
            <InputSelectMultiple data={{...data}} cb={setData} propertyName="starship" endpoints={{options: 'fetchStarshipsData', update: 'updateCharacterData'}} />

            <InputSelectMultipleLabel data={{...data}} propertyName="vehicles" message="No vehicles found" />
            <InputSelectMultiple data={{...data}} cb={setData} propertyName="vehicles" endpoints={{options: 'fetchVehiclesData', update: 'updateCharacterData'}} />
        </div>
    )
}
