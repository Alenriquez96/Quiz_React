import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch } from "react-redux";

const Register = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "REGISTER",
            payload: {
                id: (new Date).getDate(),
                user: e.target.username.value, 
                pass: e.target.pass.value,
            }
        });
        setOpen(false);
    }

  return (
    <div>
        <button onClick={()=>setOpen(true)}>Register</button>
        <Dialog onClose={()=>setOpen(false)} open={open}>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username"  placeholder="Introduce your username" />
                <input type="password" name="pass"  placeholder="Introduce your password"/>
                <input type="submit" value="submit" />
            </form>
        </Dialog>
    </div>
  )
}

export default Register