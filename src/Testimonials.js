import React from 'react';
import './Styles.css';
import TestimonialCard from './TestimonialCard';
import {testimonyA, testimonyB, testimonyC, testimonyD} from './propData';

function Testimonials(){
    return(
        <section className = 'testimonials'>
            <h2>Testimonials</h2>
            <section className = 'testimonialCardContainer'>
                <TestimonialCard data={testimonyA}/>
                <TestimonialCard data={testimonyB}/>
                <TestimonialCard data={testimonyC}/>
                <TestimonialCard data={testimonyD}/>
            </section>
        </section>
    );
}

export default Testimonials;