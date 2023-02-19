import React from 'react';
import { Routes, Route, NavLink, Navigate} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"page/1"}>Page1</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"page/2"}>Page2</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={"page/3"}>Page3</NavLink></div>
                    <div><a href="/page3">Page3 Without SPA</a></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={'/page1'} />}/>
                        <Route path={"/page1"} element={<PageOne/>}/>
                        <Route path={"/page2"} element={<PageTwo/>}/>
                        <Route path={"/page3"} element={<PageThree/>}/>
                        <Route path={"/*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

