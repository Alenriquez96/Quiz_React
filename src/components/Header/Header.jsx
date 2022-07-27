import React from "react";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Score from "./Score";

const Header = () => {

  const dispatch = useDispatch();

  const logout = () =>{
    dispatch({
      type: "LOGOUT",
    })
  }

  return (
    <header>
        <Register/>
        <Login/>
        <Score/>
        <button onClick={logout}>Logout</button>
    </header>
  )
};

export default Header;
