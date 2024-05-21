import axios from "axios"

export const getProduct = async (productsCategory) => {
    const { data } = await axios.get(`http://localhost:3500/getAllProducts?category=${productsCategory}`)
    return data
}