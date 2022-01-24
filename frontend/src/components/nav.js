import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from'../styles/nav.module.css';

const NavBar = () => {

    return (
        <>
            <nav className={`${styles.navBar}`}>
                <div className={`${styles.container}`}>
                    <h1 className={`${styles.logo}`}>Qalam Academy</h1>
                    <ul className={`${styles.navLinks}`}>
                        <li>
                            <Link className={`${styles.link}`} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`${styles.link}`} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={`${styles.link}`} to="/login">Login</Link>
                        </li>
                        {/* {
                            authContext.isAuthenticated() ?
                                <li>
                                    <Link className="link" to="/add-user">Add User</Link>
                                </li> :
                                ''
                        }
                        {
                            authContext.isAuthenticated() ?
                                <li>
                                    <Link className="link" to="/" onClick={authContext.logout}>Logout</Link>
                                </li> :
                                <li>
                                    <Link className="link" to="/login">Login</Link>
                                </li>
                        } */}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;