import React from 'react';
import './Styles.css';

function Nav(){
    return(
        <>
            <ul className ="nav">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservations</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </>
    );
}

export default Nav;