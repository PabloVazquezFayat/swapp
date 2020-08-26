import React from 'react'

export default function InputSelectMultipleLabel(props) {

    const {data, propertyName, message} = props;

    return (
        <div>
            <ul>
                {
                    data[propertyName] !== null && data[propertyName].length > 0 
                    ?
                    data[propertyName].map((value, i)=>{
                        return <li key={i}>{value.name}</li>
                    }) 
                    :
                    <li>{message}</li>
                }
            </ul>
        </div>
    )
}

