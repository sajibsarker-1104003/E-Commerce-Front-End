import { Link, withRouter } from 'react-router-dom';
import { singout, isAuthenticated, userInfo } from '../utils/auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: 'grey' }
    }
}

const Menu = ({ history }) => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                </li>
                {!isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/login')} to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/register')} to="/register">Register</Link>
                    </li>
                </>)}

                {isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, `/${userInfo().role}/dashboard`)} to={`/${userInfo().role}/dashboard`}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, `/cart`)} to={`/cart`}>Cart</Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" style={{ cursor: 'pointer', color: 'grey' }} onClick={() => {
                            singout(() => {
                                history.push('/login')
                            });
                        }}> Log Out</span>
                    </li>
                </>)}
            </ul>
        </nav>
    )
}

export default withRouter(Menu);