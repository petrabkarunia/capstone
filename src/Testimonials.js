import React from 'react';
import './Styles.css';
import TestimonialCard from './TestimonialCard';
import {testimonyA, testimonyB, testimonyC, testimonyD} from './propData';

function Testimonials(){
    return(
        <div className = 'testimonials'>
            <h2>Testimonials</h2>
            <div className = 'testimonialCardContainer'>
                <TestimonialCard data={testimonyA}/>
                <TestimonialCard data={testimonyB}/>
                <TestimonialCard data={testimonyC}/>
                <TestimonialCard data={testimonyD}/>
            </div>
        </div>
    );
}

export default Testimonials;