import React from 'react';
import Nav from './Nav';
import './Styles.css';

function Header(){
    return(
        <header className = 'header'>
            <img src='logo.svg'/>
            <Nav/>
        </header>
    );
}

export default Header;