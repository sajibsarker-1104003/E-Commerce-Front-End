import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/protecteRoutes/PrivateRoute';
import AdminRoute from '../components/protecteRoutes/AdminRoute';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';
import AdminDashboard from './admin/AdminDashboard';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/user/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <AdminRoute path="/admin/dashboard">
                    <AdminDashboard />
                </AdminRoute>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Main;