import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate=useNavigate();
    return(<>
    <Button variant="contained" size="large"  color="success" onClick={()=>navigate('login')}>Login</Button>
    ||
    <Button color="primary" onClick={()=>navigate('register')}>Sign-Up</Button>
    </>)
}

export default Home;