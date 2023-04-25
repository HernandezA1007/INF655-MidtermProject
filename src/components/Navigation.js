import { NavLink } from 'react-router-dom';

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
            </ul>
        </nav>
    );
};

export default Navigation;