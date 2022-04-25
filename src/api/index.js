import { APIRequest } from "./api-request";

export const API_LOGIN = 1;
export const API_FORGOTPIN = 2;
export const API_SIGNUP = 3;


const ApiURL = {
    login: "login",
    forgotPin: "forget_password.php",
    signup: "v3/parent_registration.php",
    
}
export {
    APIRequest,
    ApiURL
}
