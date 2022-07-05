import { useState, useEffect } from 'react';
import Layout from '../Layout';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../api/apiOrder';
import { userInfo } from '../../utils/auth';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItems(userInfo().token)
            .then(response => setCartItems(response.data))
            .catch(() => { })
    });

    return (
        <Layout title="Your Cart" description="Hurry up! Place your order!" className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Order</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </nav>
            <div className="container my-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="15%">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" align="right">Price</th>
                            <th scop="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, i) => <CartItem
                            item={item}
                            serial={i + 1}
                            key={item._id} />)}
                        <tr>
                            <th scope="row" />
                            <td colSpan={2}>Total</td>
                            <td align="right">৳ </td>
                            <td />
                        </tr>
                        <tr>
                            <th scope="row" />
                            <td colSpan={4} className="text-right">
                                <Link to="/"><button className="btn btn-warning mr-4">Continue Shoping</button></Link>
                                <Link to="/checkout" className="btn btn-success mr-4">Proceed To Checkout</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Cart;