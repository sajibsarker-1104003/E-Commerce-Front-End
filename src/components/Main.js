import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/protecteRoutes/PrivateRoute';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

export default Main;