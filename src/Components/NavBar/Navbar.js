import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className={classes.container}>
            <ul>
                <li><NavLink className={classes.navLink} to='/' exact activeClassName={classes.activeLink}>Me</NavLink></li>
                <li><NavLink className={classes.navLink} to='/projects' activeClassName={classes.activeLink}>Projects</NavLink></li>
                <li><NavLink className={classes.navLink} to='/Skills' activeClassName={classes.activeLink}>Skills/Exp</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
