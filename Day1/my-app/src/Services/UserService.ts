import { BehaviorSubject } from "rxjs";


const userSubject = new BehaviorSubject<string|null>(null);

export const UserService ={
    user$:userSubject.asObservable(),

    login:(username:string)=>{
       
        if(username.length>0)
        {
             console.log(username);
             localStorage.setItem('username',username);
             userSubject.next(username);
        }
           
    },
    logout:()=>{
        localStorage.removeItem('username');
        userSubject.next(null);

    }
}