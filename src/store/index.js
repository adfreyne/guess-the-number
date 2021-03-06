import { createStore, combineReducers } from 'redux'
import { reducer as numberReducer } from './number'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  number: numberReducer,
  form: formReducer,
})

const store = createStore(reducer)

export default store