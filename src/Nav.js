import React from 'react';
import './Styles.css';
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <>
            <ul className ="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/'>Reservations</Link></li>
                <li><Link to='/'>Order Online</Link></li>
                <li><Link to='/'>Login</Link></li>
            </ul>
        </>
    );
}

export default Nav;