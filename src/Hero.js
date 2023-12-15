import React from 'react';
import './Styles.css';
import PrimaryButton from './PrimaryButton';

function Hero(){
    return(
        <section className = "hero">
            <section className = "text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <PrimaryButton label='Reserve a Table'/>
            </section>
            <img src='restauranfood.jpg'/>
        </section>
    );
}

export default Hero;