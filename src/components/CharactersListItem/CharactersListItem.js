import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PeopleListItem(props) {

    const {name, _id} = props.data;

    return (
        <li>
            <NavLink to={`/characters/${_id}`}>{name}</NavLink>
        </li>
    )
}
