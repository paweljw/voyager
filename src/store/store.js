import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import githubReducer from './reducers/githubReducer'
import starsReducer from './reducers/starsReducer'

const rootReducer = combineReducers({
  github: githubReducer,
  stars: starsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk))

export default createStore(rootReducer, enhancers)
