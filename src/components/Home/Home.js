import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import CategoryList from '../CategoryList/CategoryList'

export default function Home() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchAllData();
            setData(results);
        }
    }

    useEffect(()=>{
        getData();
    });

    return (
        <div>
            <CategoryList data={data} />
        </div>
    )
}
