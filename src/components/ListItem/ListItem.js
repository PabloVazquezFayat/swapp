import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListItem(props) {

    const {name, _id, imageURL} = props.data;

    return (
        <li>
            <img src={imageURL} alt=''></img>
            <NavLink to={`/${props.link}/${_id}`}>{name}</NavLink>
        </li>
    )
}
