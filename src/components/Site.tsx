import React from 'react';
import {Route, Routes, NavLink, Navigate } from 'react-router-dom';
import styles from './Site.module.css'
// import {PageOne} from "./pages/PageOne";
// import {PageTwo} from "./pages/PageTwo";
// import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {dataState} from "../data/dataState";
import {Page} from "./pages/Page";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={ ({isActive}) => isActive ? styles.active : styles.navLink } to={'/page/0'}>Page 1</NavLink></div>
                    <div><NavLink className={ ({isActive}) => isActive ? styles.active : styles.navLink } to={'/page/1'}>Page 2</NavLink></div>
                    <div><NavLink className={ ({isActive}) => isActive ? styles.active : styles.navLink } to={'/page/2'}>Page 3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/page/0"}/>}/>

                        <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={"/page1"} element={<PageOne/>}/>*/}
                        {/*<Route path={"/page2"} element={<PageTwo/>}/>*/}
                        {/*<Route path={"/page3"} element={<PageThree/>}/>*/}
                        <Route path={"/*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

