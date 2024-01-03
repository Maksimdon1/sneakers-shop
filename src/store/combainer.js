import userLogin  , {  AlertReducer, PathReducer, ShowMailReducer } from './reducers'
import { combineReducers } from 'redux'

const userReducer = combineReducers({
	ShowMailReducer,
	PathReducer,
	userLogin,
	AlertReducer,
})

export default userReducer
