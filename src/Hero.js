import React from 'react';
import './Styles.css';
import PrimaryButton from './PrimaryButton';

function Hero(){
    return(
        <div className = "hero">
            <div className = "text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <PrimaryButton label='Reserve a Table'/>
            </div>
            <img src='restauranfood.jpg'/>
        </div>
    );
}

export default Hero;