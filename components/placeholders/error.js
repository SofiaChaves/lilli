import React from 'react'

import styles from './placeholder.module.css'

const ErrorPlaceholder = () => {
    return (
        <div className={styles.wrapper}>
            <img src='/error.jpg' />
            <h2>We couldn't find the postcode...</h2>
        </div>
    )
}

export default ErrorPlaceholder
