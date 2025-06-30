import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contextx/AuthContext";
import AccountMenu from "../AccountMenu";

const Home = ()=>{
    const navigate=useNavigate();
       const {user,logout} = useAuth();
    return(<>
    <AccountMenu/>
     { !user&& <div>
    <Button  variant="contained" size="large"  color="success" onClick={()=>navigate('login')}>Login</Button>
    ||
    <Button color="primary" onClick={()=>navigate('register')}>Sign-Up</Button></div>}
    {user&&<Button color="error" onClick={()=>logout()}>Logout</Button>}
    <Outlet/>
    </>)
}

export default Home;