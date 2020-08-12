import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ListItem(props) {

    const {category} = props.data;

    return (
        <li>
            <NavLink to={`/${category}`}>{category}</NavLink>
        </li>
    )
}
