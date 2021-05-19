import React from 'react';
import Search from './Search';
import style from './Nav.module.css';
import About from './About';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={style.nav} >
            <NavLink to='/about' className={style.linkAbout}>
            <About className={style.about}/>
            </NavLink>
            <NavLink to='/' className={style.linkHome}>
            <span>Home</span>
            </NavLink>
            <Search onSearch={props.onSearch} />
        </div>
    );
};