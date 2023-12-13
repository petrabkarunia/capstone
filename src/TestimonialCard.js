import React from 'react';
import './Styles.css';

function TestimonialCard(){
    return(
        <div className = 'testimonialCard'>
            <h5>Rating</h5>
            <div style={{display: 'flex'}}>
                <img src='#'/>
                <h5>Name</h5>
            </div>
            <p>Review text</p>
        </div>
    );
}

export default TestimonialCard;