import React, {useContext} from 'react';
import styles from '../styles/dashboard.module.css';
import { AuthContext } from '../context/authContext';



const Dashboard = () => {
    const authContext= useContext(AuthContext);

    return (
        <>
            <section className={`${styles.dashboardSection}`}>

                <div><center>Welcome, {`${authContext.authState.username}`}</center></div>
            </section>
        </>
    );
}

export default Dashboard;