import { useAuth } from "../Components/contexts/AuthContext"

export const isAuthenticated =()=>{
   // return localStorage.getItem('username')?true:false

   const {user} = useAuth();
   return user?true:false;
}