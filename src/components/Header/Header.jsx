import React from "react";
import { useDispatch,useSelector } from "react-redux";
import Login from "./Login";

const Header = () => {

  const dispatch = useDispatch();


  const logout = () =>{
    dispatch({
      type: "LOGOUT",
    })
  }
  const users = useSelector(state=>state.users);


  return (
    <header>
        {users.length==0?
        <Login/>
        :
        <button onClick={logout}>Logout</button>
        }
    </header>
  )
};

export default Header;
