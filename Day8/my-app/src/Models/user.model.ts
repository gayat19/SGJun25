export type UserErrors={
    username?:string;
    password?:string
}
export class UserModel
{
    public username:string="";
    public password:string="";
    constructor(un:string="",password:string="")
    {
        this.username = un;
        this.password =password;
    }
    // public validateField =(field:keyof UserModel,value:string|undefined)=>{
    //        if(field==='username' && value?.trim()==='') return "Username cannot be empty";
    //         if(field==='password' && value?.trim()==='') return "Password cannot be empty";
    //         return undefined;
    //     }
    public validate():UserErrors{
        const errors:UserErrors ={}
         if(this.username.trim()==='') errors.username="Username cannot be empty";
        if(this.password.trim()==='') errors.password="Password cannot be empty";
        return errors;
    }
    public getPasswordStrength():'weak'|'medium'|'strong'|''{
        const pwd = this.password;
        if(!pwd) return '';
        const hasLower = /[a-z]/.test(pwd);
        const hasUpper = /[A-Z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const lengthScore = pwd.length>=8?1:0;
        let strenthScore = [hasLower,hasUpper,hasNumber].filter(Boolean).length;
        strenthScore = strenthScore+lengthScore;
        if(strenthScore>=4)return'strong';
        if(strenthScore>=2)return 'medium';
        return 'weak'
    }
    // static fromForm(data:{username:string,password:string})
    // {
    //     return new UserModel(data.username,data.password)
    // }

    public withUsername(newUsername:string){
        return new UserModel(newUsername,this.password);
    }
     public withPassword(newPassword:string){
        return new UserModel(this.username,newPassword);
    }
    

}