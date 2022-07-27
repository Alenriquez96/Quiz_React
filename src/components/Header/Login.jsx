import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");


    const dispatch = useDispatch();
    const users = useSelector(state=>state.users);

    const login = ()=>{
      const payload = users.find(user=>user.user === userName)
      if (payload) {
        dispatch({
          type: "LOGIN",
          payload: userName
        })
      } else {
        alert("wrong credentials");
      }
    }
      

      
  return (
    <div>
        <button onClick={()=>setOpen(true)}>Login</button>
        <Dialog onClose={()=>setOpen(false)} open={open}>
          <form action="" onSubmit={(e)=>{
              e.preventDefault()
              login();
              setOpen(false);
              }}>
              <input type="text" name="username" value={userName} placeholder="Introduce your username" onChange={(e)=>setUserName(e.target.value)}/>
          </form>
        </Dialog>  
    </div>  
  )
}

export default Login