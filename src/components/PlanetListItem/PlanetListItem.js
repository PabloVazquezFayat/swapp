import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ListItem(props) {

    const {name, url} = props.data;

    return (
        <li>
            <NavLink to={`/planets/${url.split('/')[5]}`}>{name}</NavLink>
        </li>
    )
}
