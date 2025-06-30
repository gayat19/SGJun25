import type { UserLoginResponseModel } from "../Models/user.login.response.model";
import type { UserModel } from "../Models/user.model";
import { UserService } from "./Authentication.Service";
import { loginApiCall } from "./User.Service";



jest.mock("./User.Service");




describe("AuthenticationService",()=>{
    const mockUser:UserModel={username:"emilys",password:"emilyspass",getPasswordStrength() {
        return "strong"
    },validate(){return {}}, withPassword(test){return new UserModel("Emilys",test)},withUsername(test){return new UserModel(test,"emilyspass")}};
    const mockResponse:UserLoginResponseModel={accessToken:"abcd1234", firstName:"Test User",lastName:"Test Last",email:"",gender:"",id:101, image:"",refreshToken:"",username:""}

    beforeEach(()=>{
        jest.clearAllMocks();
        localStorage.clear();
    });

    describe("login",()=>{
        it("ApI call and data emit",async ()=>{
            //Arrange
            (loginApiCall as jest.Mock).mockResolvedValueOnce({data:mockResponse})
            const emittedValues : (UserLoginResponseModel | null)[] =[];
            const subscription = UserService.user$.subscribe({
                error:(err)=>emittedValues.push(err);
            })
            //Action
            await UserService.login(mockUser);

            ///Assert

            expect(loginApiCall).toHaveBeenLastCalledWith(mockUser);
            expect(localStorage.getItem("token")).toBe("abcd1234");
            expect(emittedValues).toContainEqual(mockResponse);

            subscription.unsubscribe();
        })
    })
})