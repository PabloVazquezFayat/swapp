import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListItem(props) {

    const {name, _id} = props.data;

    return (
        <li>
            <NavLink to={`/${props.link}/${_id}`}>{name}</NavLink>
        </li>
    )
}
