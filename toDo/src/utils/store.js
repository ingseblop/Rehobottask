import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import toDoReducer from '../reducers/toDoReducer';


const  reducer = combineReducers({
    toDo: toDoReducer,
  
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store