import { combineReducers } from 'redux'
import getAsyncReducer from './getAsyncReducer'

const users = getAsyncReducer('users')
const todos = getAsyncReducer('todos')

export default combineReducers({
  users,
  todos
})
