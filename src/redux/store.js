import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  postsReducer,
  specialityReducer,
  fragmentReducer,
  teacherReducer,
  courseReducer } from "./reducers"




export default createStore(
  combineReducers({
    postsReducer,
    specialityReducer,
    fragmentReducer,
    teacherReducer,
    courseReducer
  }),
    composeWithDevTools(applyMiddleware(thunk))
  )
