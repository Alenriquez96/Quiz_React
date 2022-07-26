import { createStore } from "redux";


const initialState = {
    users : [],
    isLoggedIn : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "LOGIN":
            return{
                ...state,
                users : [...state.users, action.payload],
                isLoggedIn: true
            }
        
        case "LOGOUT":
            return{
                ...state,
                users : [],
                isLoggedIn: false
            }
        
        default :
        return state;
    }
}

export default createStore(reducer)