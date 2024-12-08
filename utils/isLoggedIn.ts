import { toast } from "react-toastify";
import isTokenExpired from "./checkTokenExpirity";


export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const isLoggedIn = () => {
    if (isTokenExpired()) {
        logout();
        return false;
    }

    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
};

