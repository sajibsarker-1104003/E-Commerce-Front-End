import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/protecteRoutes/PrivateRoute';
import AdminRoute from '../components/protecteRoutes/AdminRoute';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import ProductDetails from './home/ProductDetails';
import Dashboard from './user/Dashboard';
import AdminDashboard from './admin/AdminDashboard';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import Cart from './order/Cart';
import ShippingAddress from './order/ShippingAddress';
import Checkout from './order/Checkout';
import Payment from './order/Payment';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/product/:id" exact component={ProductDetails} />
                <PrivateRoute exact path="/user/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/cart">
                    <Cart />
                </PrivateRoute>
                <PrivateRoute exact path="/shipping">
                    <ShippingAddress />
                </PrivateRoute>
                <PrivateRoute exact path="/payment">
                    <Payment />
                </PrivateRoute>
                <PrivateRoute exact path="/checkout">
                    <Checkout />
                </PrivateRoute>
                <AdminRoute exact path="/admin/dashboard">
                    <AdminDashboard />
                </AdminRoute>
                <AdminRoute exact path="/create/category">
                    <CreateCategory />
                </AdminRoute>
                <AdminRoute exact path="/create/product">
                    <CreateProduct />
                </AdminRoute>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Main;