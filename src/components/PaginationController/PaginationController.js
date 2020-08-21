import React from 'react'

export default function PaginationController(props) {

    const nextPage = ()=> {
        props.next(props.page);
    }

    const prevPage = ()=> {
        props.prev(props.page);
    }

    return (
        <div>
            <button onClick={nextPage}>next</button>
            <button onClikc={prevPage}>prev</button>
            <div>{props.children}</div>   
        </div>
    )
}
