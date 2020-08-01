import React from 'react'

export default function List(props) {
  
    const createListItems = ()=> {
      console.log(props);
      // if(Object.keys(props.data).length > 0){
      //   return props.data.results.map((result, i)=>{
      //     return  <li key={i}>
      //               <p>{result.name}</p>
      //             </li>
      //   });
      // }
    }

    return (
        <ul>
            {createListItems()}
        </ul>
    )
}
