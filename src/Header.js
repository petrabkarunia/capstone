import React from 'react';
import Nav from './Nav';
import './Styles.css';

function Header(){
    return(
        <div className = 'header'>
            <img src='logo.svg'/>
            <Nav/>
        </div>
    );
}

export default Header;