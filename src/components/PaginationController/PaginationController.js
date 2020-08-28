import React from 'react'
import fetchData from '../../utils/fetchData'
import {Link} from 'react-router-dom'

export default function PaginationController(props) {

    const {page, count} = props;

    const paginate = async (direction)=> {

        if(direction === 'next' && parseInt(page) < Math.ceil(count/10)){
            const newPage = parseInt(page) + 1;
            const results = await fetchData[props.endpoint](newPage.toString());

            props.cb.setData(results);
            props.cb.setPage(newPage.toString());
        }

        if(direction === 'prev' && parseInt(page) >= 2){
            const newPage = parseInt(page) - 1;
            const results = await fetchData[props.endpoint](newPage.toString());

            props.cb.setData(results);
            props.cb.setPage(newPage.toString());
        }

    }

    return (
        <div>
            {/* <Link onClick={()=> paginate('prev')} to={{ pathname: "/characters", search: `?page=${page}` }}>prev</Link>
            <Link onClick={()=> paginate('next')} to={{ pathname: "/characters", search: `?page=${page}` }}>next</Link> */}
            <button onClick={()=> paginate('prev')}>prev</button>
            <button onClick={()=> paginate('next')}>next</button>
            <div>{`${page} of ${Math.ceil(count/10)}`}</div>   
        </div> 
    )
}
