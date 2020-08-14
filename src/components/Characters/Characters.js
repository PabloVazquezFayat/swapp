import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Characters(props) {

    const [data, setData] = useState('');
    const [propertyData, setPropertyData] = useState({});

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchCharacterDataByID(setData, window.location.href.split('/')[4]);
        }       
    }, [data, setData]);

    const editPropery = ()=> {
        data[Object.keys(propertyData)] = propertyData[Object.keys(propertyData)];
        data.id = data._id;
        delete data._id;
        fetchData.updateCharacterData(setData, data);
    }

    const createCharater = ()=> {
        console.log(typeof data.imageURL);
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <div>
                            <p>{data.name}</p>
                            <input type='text' onChange={(e)=> setPropertyData({name: e.target.value})} placeholder={data.name}></input>
                            <button onClick={editPropery}>save</button>
                        </div>

                        <div>
                            
                        </div>

                        <img src={data.imageURL ? data.imageURL : '/imgs/man.png' } alt=''></img>
                    </div>
        }else if(data.status === false){
            return data.page
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createCharater()}</div>
    )
}
