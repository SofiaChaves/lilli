import {
    FETCH_ARTICLES_REQUEST, 
    FETCH_ARTICLES_SUCCESS,     
    FETCH_ARTICLES_FAILURE} from './articlesType'


    import axios from 'axios'
    
    const fetchArticlesRequest = () => {
        return {
            type: FETCH_ARTICLES_REQUEST,
        }
    }
    
    const fetchArticlesSuccess = data => {
        return {
            type: FETCH_ARTICLES_SUCCESS,
            payload: data
        }
    }
    
    
    const fetchArticlesFailure = error => {
        return {
            type: FETCH_ARTICLES_FAILURE,
            payload: error
        }
    }
    
    export const fetchArticles = (lon, lat) => {
        return (dispatch) => {
            dispatch(fetchArticlesRequest())
            let url = 'https://en.wikipedia.org/w/api.php'; 
            const params = {
                action: 'query',
                generator: 'geosearch',
                prop: 'coordinates|pageimages',
                ggscoord: `${lat}|${lon}`,
                format: 'json'
            };            
            url = url + '?origin=*';
            Object.keys(params).forEach(function(key){url += '&' + key + '=' + params[key];});
            axios.get(url)
                .then(res =>{
                    dispatch(fetchArticlesSuccess(res.data.query.pages))                
                })
                .catch(error =>{
                    dispatch(fetchArticlesFailure(error.message))
                })
        }
    }