import axios from "axios";

export async function getAllProductsByLimit(limit: number) {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    return response.data;
}
