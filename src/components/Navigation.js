import { NavLink } from 'react-router-dom';
// import { auth } from '../firebase';
import LogOutButton from './LogOutButton';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeClassName="active">
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" activeClassName="active">
                        Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/checkout" activeClassName="active">
                        Checkout
                    </NavLink>
                </li>
                {/* Tempoary */}
                <li>
                    <NavLink to="/signup" activeClassName="active">
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active">
                        Log in
                    </NavLink>
                </li>
                <li>
                    {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
                    <LogOutButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;