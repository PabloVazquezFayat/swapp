import React from 'react'
import CategoryListItem from '../CategoryListItem/CategoryListItem'

export default function List(props) {
  
    const createListItems = ()=> {
      if(Object.keys(props.data).length > 0 && props.data.status === undefined){
        return props.data.map((result, i)=>{
          return <CategoryListItem key={i} data={result}/>
        });
      }else if(props.data.status === false){
        return props.data.page;
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
