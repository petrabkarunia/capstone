import React from 'react';
import './Styles.css';

function TestimonialCard(props){
    return(
        <div className = 'testimonialCard'>
            <h5>{props.data.rating}</h5>
            <div className='imageAndName'>
                <img src={props.data.image}/>
                <h4>{props.data.name}</h4>
            </div>
            <p><em>"{props.data.review}"</em></p>
        </div>
    );
}

export default TestimonialCard;