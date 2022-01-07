import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RouteReducer from './reducers/RouteReducer'

const middleware = [thunk]
export const store = createStore(
  RouteReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
