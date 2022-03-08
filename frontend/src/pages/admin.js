import React, {useState, useContext} from 'react';
import styles from '../styles/admin.module.css';
import { FaUserAlt, FaKey } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Sidebar from '../components/sidebar';
import { AuthContext } from '../context/authContext';

const AdminPage = () => {

    const authContext = useContext(AuthContext);
    let [name,setName] = useState('');
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let [role,setRole] = useState('user');
    const isEnabled = (name.length > 0 && username.length > 0 && password.length > 0) ? true : false;
    
    const submitCredentials = async (e) => {
        e.preventDefault();

        const submitResult = await fetch('/api/add-user', {
            method: 'POST',
            body: JSON.stringify({
                name,
                username,
                password,
                role,
            }),
            headers: {
                "content-type": "application/json"
            }
        });

        if(submitResult.status === 403) 
            alert('invalid Username/Password combination');

        const {userInfo} = await submitResult.json();
        console.log(userInfo);
        }
        
        return (
            <>
            {authContext.isAuthenticated? <Sidebar /> : '' }
            <section className={`${styles.loginSection}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.flexContainer}`}>
                        <div className={`${styles.box}`}>
                            {/* <p>something</p> */}
                        </div>

                        <div className={`${styles.box}`}>
                            <form className={`${styles.loginForm}`}>
                                <h2>Add User</h2>
                                <div className={`${styles.formGroup}`}>
                                    <div><label>Name</label></div>
                                    <div className={`${styles.userIcon}`}>
                                        <span>< FaUserAlt /></span>
                                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className={`${styles.formGroup}`}>
                                    <div><label>Username</label></div>
                                    <div className={`${styles.userIcon}`}>
                                        <span>< FaUserAlt /></span>
                                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className={`${styles.formGroup}`}>
                                    <label>Password</label>
                                    <div className={`${styles.userIcon}`}>
                                        <span>< FaKey /></span>
                                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className={`${styles.formGroup}`}>
                                    <label>Role</label>
                                    {/* <div className={`${styles.userIcon}`}> */}
                                        {/* <span>< FaKey /></span> */}
                                        {/* <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                                        <select onClick={(e) => setRole(e.target.value)}>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    {/* </div> */}
                                </div>

                                <button disabled={!isEnabled} type="submit" className={`${styles.btn}`} onClick={(e) => submitCredentials(e)} >Add User<span className={`${styles.arrowKey}`}>< BsArrowRight /></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminPage;