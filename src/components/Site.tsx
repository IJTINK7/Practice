import React from 'react';
import {Route, Routes, NavLink } from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    1234
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/page1"} element={<PageOne/>}></Route>
                        <Route path={"/page2"} element={<PageTwo/>}></Route>
                        <Route path={"/page3"} element={<PageThree/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

