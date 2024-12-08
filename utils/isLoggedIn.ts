import { toast } from "react-toastify";
import isTokenExpired from "./checkTokenExpirity";


export const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const isLoggedIn = async () => {
    if (await isTokenExpired()) {
        await logout()
            .then(() => {
                console.log("Session expired. Please login again.");
            })
            .catch((error) => {
                console.error(error);
            });
        return false;
    }

    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
};

