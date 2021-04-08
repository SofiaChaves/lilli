import {
    FETCH_POSTCODE_REQUEST, 
    FETCH_POSTCODE_SUCCESS,     
    FETCH_POSTCODE_FAILURE} from './postcodeType'

import { fetchArticles } from '../index'

    import axios from 'axios'
    
    const fetchPostcodeRequest = () => {
        return {
            type: FETCH_POSTCODE_REQUEST,
        }
    }
    
    const fetchPostcodeSuccess = data => {
        return {
            type: FETCH_POSTCODE_SUCCESS,
            payload: data
        }
    }
    
    
    const fetchPostcodeFailure = error => {
        return {
            type: FETCH_POSTCODE_FAILURE,
            payload: error
        }
    }
    
    export const fetchPostcode = (postcode) => {
        return (dispatch) => {
            dispatch(fetchPostcodeRequest())
            axios.get('http://api.postcodes.io/postcodes/' + postcode)
                .then(res =>{
                    dispatch(fetchArticles(res.data.result.longitude, res.data.result.latitude))
                    dispatch(fetchPostcodeSuccess(res.data.result))              
                })
                .catch(error =>{
                    dispatch(fetchPostcodeFailure(error.message))
                })
        }
    }