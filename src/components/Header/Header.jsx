import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from "react-redux/es/exports";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const login = ()=>{
    dispatch({
      type: "LOGIN",
      payload : userName
    })
  }

  const logout = () =>{
    dispatch({
      type: "LOGOUT",
    })
  }

  const users = useSelector(state=>state.users);
  const logged = useSelector(state=>state.isLoggedIn);
  console.log(logged);

  return (
    <header>
        {
        users.length==0?
        <div>
          <button onClick={()=>setOpen(true)}>Login</button>
          <Dialog onClose={()=>setOpen(false)} open={open}>
            <form action="" onSubmit={(e)=>{
              e.preventDefault()
              login();
              }}>
              <input type="text" name="username" value={userName} placeholder="Introduce your username" onChange={(e)=>setUserName(e.target.value)}/>
            </form>
          </Dialog>  
        </div>  
        :
        <button onClick={logout}>Logout</button>
        }
    </header>
  )
};

export default Header;
