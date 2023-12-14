import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './combainer'

const initialState = {}
const middlewares = [thunk]

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
	// process.env.APP_ENV === 'development'
	// 	? composeWithDevTools(applyMiddleware(...middlewares))
	// 	: applyMiddleware(...middlewares)
)

export default store
