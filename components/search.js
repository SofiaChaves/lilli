import React, { useState } from 'react'
import axios from 'axios'


const Search = () => {
    const [searchField,setSearchField] = useState('');

    const onSubmit = () =>{
        axios.get('http://api.postcodes.io/postcodes/' + searchField)
        .then(res =>{
            console.log(res);            
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <input type='text' value={searchField} onChange={e=>setSearchField(e.target.value)}/>
            <button onClick={() => onSubmit()}>Search</button>
        </div>
    )
}

export default Search
