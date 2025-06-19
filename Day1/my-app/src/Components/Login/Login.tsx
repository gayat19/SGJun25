import React, {  useState } from "react";
import { UserModel, type UserErrors } from "../../Models/UserModel"
import axios from "axios";
import { UserService } from "../../Services/UserService";



export default function Login(){
    let [user,setUser] = useState<UserModel>(UserModel.fromForm({username:"",password:""}));
     let [error,setError] = useState<UserErrors>({});
     let [strenth,setStrength]= useState<string>('')

   
    const handleUsernameChange=(eventArgs:React.ChangeEvent<HTMLInputElement>)=>{
        
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
    const getStrenthColour=(strength:string)=>{
        switch(strength)
        {
            case 'weak':return 'red';
            case 'medium':return 'orange';
            case 'strong':return 'green';
            default :return 'grey';
        }
    }
    const handleLogin =()=>{
        // const errorUsername = validateField('username',user.username);
        // const errorPassword = validateField('password',user.password);
        // if(errorUsername || errorPassword)
        // {
        //     setError({username:errorUsername,password:errorPassword})
        //     return;
        // }
        setError(user.validate());
        console.log(error)
        if(!error.username || !error.password)
        {
            console.log(`username - ${user.username} and password - ${user.password}`);
            axios.post("https://dummyjson.com/auth/login",user)
            .then(data=>{
               if(data.status==200)
               {
                    UserService.login(user.username);
                    alert(`welcome ${data.data.firstName}`)
               }
            })
            .catch(err=>{
                if(err.status==400)
                alert("Invalid username or password")
            })
           
        }
        
    }
    return (<>
        <label>Username</label>
        <input type="text" name="un" onChange={(e)=>handleUsernameChange(e)} value={user.username}/>
        {error.username&&<p style={{color:'red'}}>Username is empty</p>}
        {/* <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/> */}
        <br/>
        <label>Password</label>
        <input type="password" name="pass" onChange={(e)=>handleUsernameChange(e)} value={user.password}/>
        {strenth&&<p style={{color:getStrenthColour(strenth)}}>Password strength - {strenth}</p>}
        {error.password&&<p style={{color:'red'}}>Password is empty</p>}
        {/* <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/> */}
        <br/>
        
        <button onClick={handleLogin}>Login</button>
    </>)
}