import React,{useContext,useState} from 'react';
import styles from '../styles/sidebar.module.css';
import {FaHome, FaUser, FaBars,FaAngleRight, FaUserPlus} from 'react-icons/fa';
import { AuthContext } from '../context/authContext';



const Sidebar = () => {
    const authContext = useContext(AuthContext);

    let [onClose,setonClose] = useState(true);

    const handleToggle = (onClose) => {
        setonClose(!onClose);
    }

    return (
        <>
            {
                true?
                    <nav className={`${styles.sidebar}`}>
                        <header>
                            <div className={`${styles.toggle}`} onClick={() => handleToggle(onClose)} ><span><FaBars /></span></div>
                        </header>
                        <div className={`${styles.menuBar}  ${onClose === true ? styles.close : ''}  `}>
                            <div className={`${styles.menu}`}>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className={`${styles.icon}`}><FaHome /></span>
                                            <span className={`${styles.text} ${styles.navText}`}>Dashboard</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <span className={`${styles.icon}`}><FaUser /></span>
                                            <span className={`${styles.text} ${styles.navText}`}>All Users</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <span className={`${styles.icon}`}><FaUserPlus /></span>
                                            <span className={`${styles.text} ${styles.navText}`}>Add User</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    :
                    ''
            }
        </>
    );
}

export default Sidebar;