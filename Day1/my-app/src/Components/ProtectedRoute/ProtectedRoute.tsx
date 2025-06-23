import type { JSX } from "react"
import { isAuthenticated } from "../../Services/AuthService";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedProps ={
    children:JSX.Element;
}

const ProtectedRoute =({children}:ProtectedProps)=>{
    let location = useLocation();
    return isAuthenticated()?children:<Navigate to="/login" state={{from:location}} replace/>
}

export default ProtectedRoute;