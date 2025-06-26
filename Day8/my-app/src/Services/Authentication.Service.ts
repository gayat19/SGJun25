import { BehaviorSubject } from "rxjs";
import type { UserLoginResponseModel } from "../Models/user.login.response.model";
import type { UserModel } from "../Models/user.model";
import { loginApiCall } from "./User.Service";


const userSubject = new BehaviorSubject<UserLoginResponseModel|null>(null);

export const UserService ={
    user$:userSubject.asObservable(),

    login:(user:UserModel)=>{

        loginApiCall(user).then((userData:any)=>{
            console.log(userData);
            const loginResponse = userData.data as UserLoginResponseModel
            localStorage.setItem('token',loginResponse.accessToken);
            userSubject.next(loginResponse);
        })
        .catch((err)=>{
            console.error(err);
            userSubject.error("UNable to login");
        })
   
           
    },
    logout:()=>{
        localStorage.removeItem('token');
        userSubject.next(null);

    }
}