import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import postcodeReducer from './postcode/postcodeReducer'

const store = createStore(
    postcodeReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;