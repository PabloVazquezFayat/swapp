import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import CategoryList from '../CategoryList/CategoryList'

export default function Home() {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchAllData(setData);
        }
    }, [data, setData]);

    return (
        <div>
            <CategoryList data={data} />
        </div>
    )
}
