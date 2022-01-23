import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from'../styles/nav.module.css';

const NavBar = () => {

    // let [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        // <nav className="bg-slate-700 text-gray-200 shadow-lg">
        // 	<div className="max-w-6xl mx-auto px-4">
        // 		<div className="flex justify-between">
        // 			<div className="flex space-x-7">
        // 				<div>
        // 					{/* <!-- Website Logo -->
        // 					<a href="#" className="flex items-center py-4 px-2">
        // 						<img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        // 						<span className="font-semibold text-gray-500 text-lg">Navigation</span>
        // 					</a> */}
        // 				</div>
        // 				{/* <!-- Primary Navbar items --> */}
        // 				<div className="hidden md:flex items-center space-x-1">
        // 					<a href="" className="py-4 px-2 border-b-4 border-b-stone-200 font-semibold ">Home</a>
        // 					{/* <a href="" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Services</a> */}
        // 					<a href="" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">About</a>
        // 					<a href="" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
        // 				</div>
        // 			</div>
        // 			{/* <!-- Secondary Navbar items --> */}
        // 			<div className="hidden md:flex items-center space-x-3 ">
        // 				<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
        // 				<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
        // 			</div>
        // 			{/* <!-- Mobile menu button --> */}
        // 			<div className="md:hidden flex items-center">
        // 				<button className="outline-none mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        // 				<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
        // 					x-show="!showMenu"
        // 					fill="none"
        // 					strokeLinecap="round"
        // 					strokeLinejoin="round"
        // 					strokeWidth="2"
        // 					viewBox="0 0 24 24"
        // 					stroke="currentColor"
        // 				>
        // 					<path d="M4 6h16M4 12h16M4 18h16"></path>
        // 				</svg>
        // 			</button>
        // 			</div>
        // 		</div>
        // 	</div>

        // 	{/* mobile menu */}
        // 	<div className= {(showMobileMenu ? "" : "hidden") + " mobile-menu"}>
        // 		<ul className="">
        // 			<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
        // 			<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
        // 			<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
        // 			<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
        // 		</ul>
        // 	</div>
        // </nav>
        //         <nav className="navbar">
        //             <div className="container">
        //                 <div className="navItemsContainer">
        //                     <div>
        //                         <ul>
        //                             <li>Home</li>
        //                             <li>About</li>
        //                             <li>Contact Us</li>
        //                         </ul>
        //                     </div>
        //                     <div>
        //                         <ul>
        //                             <li></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        <>
            <nav className={`${styles.navBar}`}>
                <div className={`${styles.container}`}>
                    <h1 className={`${styles.logo}`}>Taalib </h1>
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