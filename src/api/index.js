import { APIRequest } from "./api-request";

export const API_LOGIN = 1;
export const API_FORGOTPIN = 2;
export const API_SIGNUP = 3;
export const LEAD = 4;
export const FILTER = 5;


const ApiURL = {
    login: "login",
    forgotPin: "forget_password.php",
    signup: "v3/parent_registration.php",
    lead:"wiInquiries/mongoLeads?page=0&size=10&sort=createdOn,desc",
    filter:"mongo/filter/list",
    
}
export {
    APIRequest,
    ApiURL
}
