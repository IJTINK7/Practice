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
                    <div><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page/0"}>Page1</NavLink></div>
                    <div><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink}  to={"/page/1"}>Page2</NavLink></div>
                    <div><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink}  to={"/page/2"}>Page3</NavLink></div>
                    <div><a href="/page3">Page3 without SPA</a></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                        <Route path={"/*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

