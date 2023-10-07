import axios from "axios";

export async function getAllUsers() {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data;
}

export async function getAllUsersByLimit(limit: number) {
    const response = await axios.get(`https://dummyjson.com/users?limit=${limit}`);
    return response.data;
}

export async function getUserById(id: number) {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
}
