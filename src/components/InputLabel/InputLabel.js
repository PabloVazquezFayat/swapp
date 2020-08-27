import React from 'react'

export default function InputLabel(props) {
    return (
        <div>
            { 
                props.children !== null && props.children !== undefined 
                ? props.children 
                : 'No value found'
            }
        </div>
    )
}
