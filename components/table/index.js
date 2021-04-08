import React from 'react'
import { connect } from 'react-redux'
import InfoPlaceholder from '../placeholders/info';
import ErrorPlaceholder from '../placeholders/error';

import styles from './table.module.css'

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

const Table = ({ loading, articles, error }) => {
    return loading ? (<div>loading</div>) : error ? <ErrorPlaceholder /> : isEmpty(articles) ? <InfoPlaceholder /> :
    (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.headerTr}>
                        <th>Thumbnail</th>
                        <th>Title</th>
                    </tr>
                    {Object.keys(articles).map((key, index) => 
                        <tr>
                            <td><img src={articles[key].thumbnail?.source} /></td>
                            <td>{articles[key].title}</td>
                        </tr> 
                    )}
                </tbody>                
            </table>
        </div>      
    )
}

const mapStateToProps = state => {
    return {
        loading: state.articles.loading || state.postcode.loading ? true : false,
        articles: state.articles.data,
        error: state.articles.error ? state.articles.error : state.postcode.error ? state.postcode.error : null
    }
}

export default connect(mapStateToProps)(Table)
