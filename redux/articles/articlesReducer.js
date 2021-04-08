import { 
    FETCH_ARTICLES_REQUEST, 
    FETCH_ARTICLES_SUCCESS,     
    FETCH_ARTICLES_FAILURE } from './articlesType';

const initialState = {
    loading: false,
    data: {},
    error: ''
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case FETCH_ARTICLES_SUCCESS: 
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_ARTICLES_FAILURE: 
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state
    }

}

export default articlesReducer