import React, {useState, useEffect} from 'react'
import fetchData from '../../utils/fetchData'

export default function CreateNew(props) {

    const [data, setData]= useState('');
    const [options, setOptions] = useState('');
    const [checks, setChecks] = useState('');

    const createInputs = ()=> {
        if(props.inputs && props.inputs.length > 0){
            return  props.inputs.map((input, i)=> {
                return  <li key={i}>
                            <label>{input.propertyName}</label>
                            <input type="text" placeholder={input.propertyName} onChange={(e)=> {
                                let newData = {...data};
                                newData[input.propertyName] = e.target.value;
                                setData(newData);
                            }} />
                        </li>
            })
        }
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
            <ul>{createInputs()}</ul>
            
        </div>
    )
}
