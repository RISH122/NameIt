import React from 'react'
import './SearchBox.css'
const SearchBox=({onInputchage})=>{
    return(
        <div className='search-container'>
            <input onChange={(event)=>onInputchage(event.target.value)}
             placeholder='Type keywords' className='search-input' />
        </div>
    )
}


export default SearchBox;