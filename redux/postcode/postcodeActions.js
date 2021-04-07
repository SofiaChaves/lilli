import {
    FETCH_POSTCODE_FAILURE, 
    FETCH_POSTCODE_REQUEST,     
    FETCH_POSTCODE_SUCCESS} from './postcodeType'


    import axios from 'axios'
    
    export const fetchPostcodeRequest = () => {
        return {
            type: FETCH_POSTCODE_REQUEST,
        }
    }
    
    export const fetchPostcodeSuccess = data => {
        return {
            type: FETCH_POSTCODE_SUCCESS,
            payload: data
        }
    }
    
    
    export const fetchPostcodeFailure = error => {
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
                    dispatch(fetchPostcodeSuccess(res.data.result))                
                })
                .catch(error =>{
                    dispatch(fetchPostcodeFailure(error.message))
                })
        }
    }