import React, {useState, useEffect} from 'react'
import fetchData from '../../utils/fetchData'
import CreateNew from '../CreateNew/CreateNew'

export default function Creator() {

    const [data, setData] = useState('');
    const [form, setForm] = useState('');

    const getData = async ()=> {
        const response = await fetchData.fetchAllData();
        setData(response);
    }

    useEffect(()=> {
        getData();
    }, []);

    const loadForm = (value)=> {
        setForm(<CreateNew category={value}/>)
    }

    const selectorOptions = ()=> {
        if(data !== '' && data.length !== 0 && data.status === undefined){
            const options = data.map((category, i)=>{
                return <option key={i+1} value={category.category}>{category.category}</option>
            });
            return  <select onChange={(e)=> loadForm(e.target.value) }>
                        <option key={0}>Select a category</option>
                        {options}
                    </select>
        }else if(data.status === false){
            console.log(data.page)
            return data.page
        }else{
            return <div>Loading...</div>
        }
    }

    return (
        <div>
            <h1>Creator</h1>
            {selectorOptions()}
            {form !== '' ? form : null}
        </div>
    )
}
