import axios from "axios";
import type { UserModel } from "../Models/user.model";
import { baseUrl } from "../Configs/Config.dev";
import type { UserSignUpModel } from "../Models/user.signup.model";

export function loginApiCall(user:UserModel)
{
    const url = `${baseUrl}auth/login`
    return axios.post(url,user);
}

export function registerApiCall(user:UserSignUpModel)
{
    const url = `${baseUrl}users/add`
    return axios.post(url,user);
}