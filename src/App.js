import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { moviesReducer } from 'reducers/moviesReducer'
import { Rex } from 'pages/Rex'

const reducers = combineReducers(moviesReducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

export const App = () => {  

  return (
    <Provider store={store}>
      <Rex />
    </Provider>
    
    
 
  )
}
