import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ListItem(props) {

    const {category, count} = props.data;

    return (
        <li>
            <NavLink to={`/${category}`}>{category}</NavLink>
            <p>{count}</p>
        </li>
    )
}
