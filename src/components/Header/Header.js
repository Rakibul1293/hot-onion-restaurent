import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png';
import './Header.css';
import { useAuth } from "../Auth/Auth";

const Header = () => {
    const auth = useAuth();
    console.log(auth);
    // const { user, ...best } = useAuth();
    // console.log(auth.user, best);

    const handleSignOut = () => auth.signOut();

    return (
        // <div className="header">
        //     <img src={logo} alt="" />
        //     <nav>
        //         <a href="/shop">Shop</a>
        //         <a href="/review">Order Review</a>
        //         <a href="/inventory">Manage Inventory</a>

        //         {
        //             auth.user && <span style={{ color: 'Yellow' }}>Welcome {auth.user.displayName}</span>
        //         }
        //         {
        //             auth.user ?
        //                 <a href="/" onClick={handleSignOut}>Sign Out</a>
        //                 : <a href="/login">Sign In</a>

        //         }


        //     </nav>
        // </div>



        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <button className="signUp-btn">Sign Up</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav >
        </header>

    );
};

export default Header;