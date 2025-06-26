import { Button, TextField } from "@mui/material";
import React, {  useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { UserModel, type UserErrors } from "../../Models/user.model";



export default function Login(){
    let [user,setUser] = useState<UserModel>(new UserModel());
     let [error,setError] = useState<UserErrors>({});
     let navigate = useNavigate();
     let location = useLocation();

    const from = (location.state as {from:Location})?.from.pathname || '/';
    const handleUserdataChange=(eventArgs:React.ChangeEvent<HTMLInputElement>)=>{
        switch (eventArgs.target.name) {
            case "un":
                setUser(user.withUsername(eventArgs.target.value))
                const errorUsername = user.validateField('username',eventArgs.target.value);
                setError(err=>({...err,username:errorUsername}));
                break;
            case "pass":
                setUser(user.withPassword(eventArgs.target.value))
                const errorPassword = user.validateField('password',eventArgs.target.value);
                setError(err=>({...err,password:errorPassword}));
                break;
            default:
                break;
        }
    }

    const handleLogin =()=>{
    
        setError(user.validate());
        console.log(error)
        if(!error.username || !error.password)
        {
            console.log(`username - ${user.username} and password - ${user.password}`);
           

        }
        
    }
    return (<>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="un" onChange={(e:any)=>handleUserdataChange(e)} value={user.username} />
        
        {error.username&&<p style={{color:'red'}}>Username is empty</p>}
         <TextField id="outlined-basic" label="Username" variant="outlined" type="password" name="pass" onChange={(e)=>handleUserdataChange(e)} value={user.password} />
        
        {error.password&&<p style={{color:'red'}}>Password is empty</p>}
        {/* <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/> */}
        <br/>
        <Button color="primary"  onClick={handleLogin}>Login</Button>
    </>)
}