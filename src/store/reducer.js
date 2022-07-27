import { createStore } from "redux";


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

export default createStore(reducer)