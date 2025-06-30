import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserLoginResponseModel } from "../Models/user.login.response.model";



type AuthContextType ={
    user:UserLoginResponseModel|null,
    login:(username:UserLoginResponseModel)=>void,
    logout:()=>void
}


const AuthContext = createContext<AuthContextType|undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode})=>
{
    const [user,setUser] = useState<UserLoginResponseModel|null>(null);
    const login = (userdata:UserLoginResponseModel)=>setUser(userdata)
    const logout=()=>setUser(null);

    return(<AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>);

}

export const useAuth =()=>{
     const context = useContext(AuthContext);
            if((!context)) throw new Error('useAuth cannot be used outside AuthProvider');
    return context;
}


