import React from 'react';
import { API } from '../../utils/config';

const CartItem = ({ item, serial }) => {
    return (
        <tr>
            <th scope="row">{serial}</th>
            <th><img src={`${API}/product/photo/${item.product._id}`} alt={item.product.name} width="30px" /></th>
            <td>{item.product ? item.product.name : ""}</td>
            <td>
                <button className="btn btn-outline-primary btn-sm">-</button>
                &nbsp;&nbsp;{item.count}&nbsp;&nbsp;
                <button className="btn btn-outline-primary btn-sm">+</button>
            </td>
            <td align="right">৳ {item.price * item.count}  </td>
            <td><button className="btn btn-danger btn-sm">Remove From Cart</button></td>
        </tr>)
};


export default CartItem;