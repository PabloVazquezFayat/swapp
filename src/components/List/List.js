import React from 'react'
import {NavLink} from 'react-router-dom'

export default function List(props) {
  
    const createListItems = ()=> {
      console.log(props);
      if(Object.keys(props.data).length > 0){
        return props.data.map((result, i)=>{
          return  <li key={i}>
                    <NavLink to={`/${result.category}`}>{result.category}</NavLink>
                    <p>{result.count}</p>
                  </li>
        });
      }else{
        return  <li>
                    <p>Loading...</p>
                </li>
      }
    }

    return (
        <ul>
            {createListItems()}
        </ul>
    )
}
