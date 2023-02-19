import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    1234
                </div>
                <div className={styles.content}>
                    Content
                </div>
            </div>
        </div>
    );
};

