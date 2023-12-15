import React from 'react';
import './Styles.css';

function Footer(){
    return(
        <section className = "footer">
            <img src='Mario and Adrian A.jpg'/>
            <nav id='doormatNavigation'>
                <h6>Doormat Navigation</h6>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
            <nav id='contact'>
                <h6>Contact</h6>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </nav>
            <nav id='socialMediaLinks'>
                <h6>Social Media Links</h6>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </nav>
        </section>
    );
}
export default Footer;