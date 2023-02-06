import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
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
                    <div><NavLink to={"/page1"}>Page1</NavLink></div>
                    <div><NavLink to={"/page2"}>Page2</NavLink></div>
                    <div><NavLink to={"/page3"}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/page1"} element={<PageOne/>}/>
                        <Route path={"/page2"} element={<PageTwo/>}/>
                        <Route path={"/page3"} element={<PageThree/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

