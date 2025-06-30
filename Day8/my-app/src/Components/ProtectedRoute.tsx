import type { JSX } from "react"

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Contextx/AuthContext";

type ProtectedProps ={
    children:JSX.Element;
}

const ProtectedRoute =({children}:ProtectedProps)=>{
    const {user} = useAuth();
    let location = useLocation();
    return user?children:<Navigate to="/login" state={{from:location}} replace/>
}

export default ProtectedRoute;