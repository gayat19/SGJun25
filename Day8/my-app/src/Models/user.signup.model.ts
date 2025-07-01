export type UserRegisterErrors={
    firstName?:string;
    lastName?:string;
    age?:string;
}

export class UserSignUpModel{
    public firstName:string; 
    public lastName:string;
    public age:number ;
    constructor(){
        this.firstName= 'Muhammad',
        this.lastName='Ovi',
        this.age=25;
    }
    //  public validateField =(field:keyof UserSignUpModel,value:string|undefined)=>{
    //        if(field==='firstName' && value?.trim()==='') return "firstname cannot be empty";
    //         if(field==='lastName' && value?.trim()==='') return "lastname cannot be empty";
    //         if(field==='age' && value?.trim()==='' ) return "age cannot be empty";
    //         if(field==='age' && value as any <18) return "Invalid age";
    //         return undefined;
    //     }
    public validate():UserRegisterErrors{
            const errors:UserRegisterErrors ={}
             if(this.firstName.trim()==='') errors.firstName="Firstname cannot be empty";
            if(this.lastName.trim()==='') errors.lastName="Lastname cannot be empty";
            if(this.age < 18) errors.age = "Age cannot be less than 18";
            return errors;
        }
    
}