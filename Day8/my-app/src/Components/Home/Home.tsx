import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contextx/AuthContext";
import AccountMenu from "../AccountMenu";
import { useMemo, useState } from "react";
import One from "../ONe";
import Two from "../Two";


const Home = ()=>{
    const [check,setCheck] = useState(true);
    const [number,setNumebr] = useState(100);
    const calculate = useMemo(()=>{
        console.log('Use Memo function triggerd');
        const compute = (num:number)=>{
            return num+num+1*3/num *num;
        }
       return compute(number);
    },[number])
    const navigate=useNavigate();
       const {user,logout} = useAuth();
    //const result = calculate(number)
    return(<>
    <AccountMenu/>
    {calculate}
    <Button onClick={()=>setCheck(!check)} color="info">Toggle</Button> 
    <button onClick={()=>setNumebr(number+1)}>Increment</button>
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