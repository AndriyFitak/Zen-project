import axios from 'axios';

const baseUrl = 'http://localhost:3500';

export const createOrder = async (orderData) => {
    const { data } = await axios.post(`${baseUrl}/createOrder`, orderData);
    return data;
}

export const getOrders = async (userData) => {
    const { data } = await axios.post(`${baseUrl}/getOrders`, userData);
    return data;
}