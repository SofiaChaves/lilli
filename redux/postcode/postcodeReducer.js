import { 
    FETCH_POSTCODE_FAILURE,
    FETCH_POSTCODE_SUCCESS, 
    FETCH_POSTCODE_REQUEST } from './postcodeType';

const initialState = {
    loading: true,
    postcode: [],
    error: ''
}

const postcodeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTCODE_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case FETCH_POSTCODE_SUCCESS: 
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_POSTCODE_FAILURE: 
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state
    }

}

export default postcodeReducer