import React from 'react'

export default function InputLabel(props) {
    return (
        <div>
            { 
                props.children !== null && props.children !== undefined 
                ? `${props.propertyName}: ${props.children}`
                : `${props.propertyName}: No value found`
            }
        </div>
    )
}
