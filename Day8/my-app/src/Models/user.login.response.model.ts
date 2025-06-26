export class UserLoginResponseModel{
  public id: number;
  public username: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public image: string;
  public accessToken: string;
  public refreshToken: string;

  constructor(){
    this.id=0;
    this.username="";
    this.email ="";
    this.firstName="";
    this.lastName="";
    this.gender ="";
    this.image="";
    this.accessToken="";
    this.refreshToken="";
  }
}