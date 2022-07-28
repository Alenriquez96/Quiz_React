import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";





const initialState = {
    users : [],
    user: "",
    isLoggedIn : false,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "REGISTER":
            return{
                ...state,
                users : [...state.users, action.payload]
            }

        case "LOGIN":
            return{
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case "LOGOUT":
            return{
                ...state,
                user : "",
                isLoggedIn: false
            }
        
        case "UPDATE":
            return{
                ...state,
                users: action.payload
            }
        
        case "LOADING":
            return{
                ...state,
                isLoading: false
            }
        
        default :
        return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store