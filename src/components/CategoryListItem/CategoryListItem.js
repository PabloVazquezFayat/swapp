import React from 'react'
import {NavLink} from 'react-router-dom'

export default function ListItem(props) {

    const {category, imageURL} = props.data;

    return (
        <li>
            <img src={imageURL} alt=''></img>
            <NavLink to={`/${category}`}>{category}</NavLink>
        </li>
    )
}
