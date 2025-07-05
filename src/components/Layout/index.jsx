import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Routes from "../../Routes";
import Footer from '../Footer';

import styles from './style.module.css';

function Layout(){
    return(
        <div className={styles.container}>
            <Header title="Titulo Header"/>
            <nav>
                <ul className={styles.subHeader}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/posts">Visualizar posts</Link></li>
                    <li><Link to="/posts/85976">Post</Link></li>
                </ul>
            </nav>
            <Routes />
            <Footer />
        </div>
    );
}

export default Layout;