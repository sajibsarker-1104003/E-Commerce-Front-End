import axios from 'axios';
import { API } from '../utils/config';

export const addToCart = (token, cartItem) => {
    return axios.post(`${API}/cart`, cartItem, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getCartItems = (token) => {
    return axios.get(`${API}/cart`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
