import axios from "axios";
import {SignInFormData} from "../../types";

export async function login(data: SignInFormData) {
    return await axios.post("https://dummyjson.com/auth/login", {
        username: data.email,
        password: data.password,
        expiresInMins: data.remember ? 60 * 24 * 30 : 60 * 24,
    }, {
        headers: {"Content-Type": "application/json"}
    });
}
