import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import List from '../List/List'

export default function Home() {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchAllData(setData);
            // console.log(data);
        }
    }, [data, setData]);

    return (
        <div>
            <List data={data} />
        </div>
    )
}
