import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ListItem(props) {

    const {_id, name} = props.data;

    return (
        <li>
            <NavLink to={`/${_id}`}>{name}</NavLink>
        </li>
    )
}
