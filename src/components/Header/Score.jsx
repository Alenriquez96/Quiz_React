import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { useSelector } from "react-redux";


const Score = () => {
    const [open, setOpen] = useState(false);
    const users = useSelector(state=>state.users);

  return (
    <div>
        <button onClick={()=>setOpen(true)}>Scores</button>
        <Dialog onClose={()=>setOpen(false)} open={open}>
            <ul>
                {users.map(user=><li>{user.user} : {user.score?user.score:"No data"}</li>)}
            </ul>
        </Dialog>
    </div>

  )
}

export default Score