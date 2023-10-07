import axios from "axios";

export async function getAllUsersByLimit(limit: number) {
    const response = await axios.get(`https://dummyjson.com/users?limit=${limit}`);
    return response.data;
}
