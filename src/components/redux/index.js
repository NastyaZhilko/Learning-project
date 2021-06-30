import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {registrationReducer} from "./reducers/registration-reducer";
import {loginReducer} from "./reducers/login-reducer";

const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))