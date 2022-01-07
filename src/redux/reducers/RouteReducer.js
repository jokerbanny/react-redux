import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import productReducer from './productReducer'

const routeReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
})

export default routeReducer
