import { combineReducers } from 'redux'
import articlesReducer from './articles/articlesReducer'
import postcodeReducer from './postcode/postcodeReducer'

const rootReducer = combineReducers({
    postcode: postcodeReducer,
    articles: articlesReducer
})

export default rootReducer