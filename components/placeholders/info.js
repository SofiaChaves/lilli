import React from 'react'

import styles from './placeholder.module.css'

const InfoPlaceholder = () => {
    return (
        <div className={styles.wrapper}>
            <img src='/search.jpg' />
            <h2>Enter a Postcode</h2>
        </div>
    )
}

export default InfoPlaceholder
