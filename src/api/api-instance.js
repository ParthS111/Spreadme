import axios from 'axios';
import store from '../redux/store';
import ResponseCode from "../utils/Constants";


import ENV from "../utils/Constants";

let axiosInstance = axios.create({
    baseURL:'https://api.spreadme.app/',
    timeout: 30000,
});

axiosInstance.defaults.headers.post['content-type'] = 'application/json';
store.subscribe(listener);

function listener() {
    if (store.getState() !== undefined) {
        console.log(store.getState(),'store');
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().token}`;
    //     axiosInstance.defaults.headers.common['Version'] = DeviceInfo.getVersion();
    //     axiosInstance.defaults.headers.common['app_type'] = "parent";
    }
}

axiosInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    error => Promise.reject(error)
);


axiosInstance.interceptors.response.use((response) => {
    console.log(response.data,'response');
    let dataResponse = {
        status: response.data.statusCode,
        message: response.data.message,
        meta: response.data.meta,
        data: response.data !== undefined ? response.data : null,
        pagination: response.data.pagination !== undefined ? response.data.pagination : null
    };

    return Promise.resolve(dataResponse);
}, (error) => {
    // console.log(error.response.data,"9999")
    let errorResponse = {

        status: error && error.response && error.response !== undefined ? error.response.statusCode !== undefined ? error.response.statusCode:error.response.data.statusCode : ResponseCode.INTERNAL_SERVER_ERROR,
        meta: error && error.response && error.response.data.meta !== undefined ? error.response.data.meta : undefined,
        data: error && error.response && error.response.data.data !== undefined ? error.response.data.data : undefined,
        message: error && error.response && error.response.data.message !== undefined ? error.response.data.message : undefined,
    };
    // console.log("error :: ", errorResponse);
    // switch (errorResponse.status) {
    //     case ResponseCode.NOT_FOUND:
    //         // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Sorry, Not Found");
    //         break;
    //     case ResponseCode.BAD_GATEWAY:
    //         // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Something went wrong.Please try again.");
    //         break;
    //     case ResponseCode.INTERNAL_SERVER_ERROR:
    //         // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Server Error. Please try again.");
    //         break;
    //     case ResponseCode.TOKEN_INVALID:
    //         store.dispatch(logout());
    //         DeviceEventEmitter.emit(notificationKey.LOGOUT, {});
    //         // showSnackBar(errorResponse.meta !== undefined ? errorResponse.meta.message : "Server Error. Please try again.");
    //         break;
    // }
    return Promise.reject(errorResponse);
});

export {
    axiosInstance
};