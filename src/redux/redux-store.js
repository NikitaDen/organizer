import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import thunkMiddleWare from "redux-thunk";


const reducers = combineReducers({
   main: mainReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;