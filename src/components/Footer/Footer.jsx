import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const users = useSelector(state=>state.users);
  console.log(users);
  return (
    <footer style={{width: "100%",display: "flex",justifyContent: "space-evenly"}}>
      {users.map((user,i)=><h2 key={i} style={{color:"white"}}>{user.user}</h2>)}
    </footer>
  )
};

export default Footer;
