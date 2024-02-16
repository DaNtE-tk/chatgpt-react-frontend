import { createStore, combineReducers, applyMiddleware } from "redux"
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sendPromptReducer, getUserPromptsReducer } from "./reducers/promptReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    sendPrompt: sendPromptReducer,
    userPrompts: getUserPromptsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialStore = {
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialStore, composeWithDevTools(applyMiddleware(...middleware)))

export default store