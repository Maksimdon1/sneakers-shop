import userLogin  , { userRegisterReducer, AlertReducer, PathReducer, ShowMailReducer } from './reducers'
import { combineReducers } from 'redux'

const userReducer = combineReducers({
	ShowMailReducer,
	PathReducer,
	userLogin,
	AlertReducer,
	userRegister: userRegisterReducer,
})

export default userReducer
