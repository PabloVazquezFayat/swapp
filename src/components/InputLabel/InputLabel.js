import React from 'react'

export default function InputLabel(props) {

    const {data, propertyName, propertySubName, message} = props;

    return (
        <div>
            {
                data[propertyName] !== null &&
                data[propertyName] !== undefined &&
                data[propertyName][propertySubName] !== null && 
                data[propertyName][propertySubName] !== undefined 
                ?
                <label>{data[propertyName][propertySubName]}</label>
                :
                <label>{message}</label>
            }
        </div>
    )
}
