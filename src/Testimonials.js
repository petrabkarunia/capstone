import React from 'react';
import './Styles.css';
import TestimonialCard from './TestimonialCard';

function Testimonials(){
    return(
        <div className = 'testimonials'>
            <h2>Testimonials</h2>
            <div className = 'testimonialCardContainer'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    );
}

export default Testimonials;