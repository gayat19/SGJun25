import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contextx/AuthContext";
import AccountMenu from "../AccountMenu";
import { useState } from "react";
import One from "../ONe";
import Two from "../Two";

const Home = ()=>{
    const [check,setCheck] = useState(true);
    const navigate=useNavigate();
       const {user,logout} = useAuth();
    return(<>
    <AccountMenu/>
    <Button onClick={()=>setCheck(!check)} color="info">Toggle</Button> 
    <One/>
    <hr/>
    <Two/>
     { !user&& <div>
    <Button  variant="contained" size="large"  color="success" onClick={()=>navigate('login')}>Login</Button>
    ||
    <Button color="primary" onClick={()=>navigate('register')}>Sign-Up</Button></div>}
    {user&&<Button color="error" onClick={()=>logout()}>Logout</Button>}
    <Outlet/>
    </>)
}

export default Home;