import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { moviesReducer } from 'reducers/moviesReducer'
import { Rex } from 'pages/Rex'


const reducers = combineReducers(moviesReducer)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const App = () => {  

  return (
    <Provider store={store}>
      <Rex />
    </Provider>
    
    
 
  )
}
