import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchPostcode } from '../../redux'

import styles from './search.module.css'

const Search = ({ fetchPostcode }) => {
    const [searchField,setSearchField] = useState('');

    return (
        <div className={styles.wrapper} >
            <input 
                className={styles.input} 
                placeholder='Enter Postcode' 
                type='text' value={searchField} 
                onChange={e=>setSearchField(e.target.value)}/>
            <button  
                className={styles.button} 
                onClick={() => fetchPostcode(searchField)}>
                    Search Articles</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPostcode: (postcode) => dispatch(fetchPostcode(postcode))
    }
}

export default connect(null, mapDispatchToProps)(Search)
