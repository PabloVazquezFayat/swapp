import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PeopleListItem(props) {

    const {name, url} = props.data;

    return (
        <li>
            <NavLink to={`/people/${url.split('/')[5]}`}>{name}</NavLink>
        </li>
    )
}
