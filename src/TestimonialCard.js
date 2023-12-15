import React from 'react';
import './Styles.css';

function TestimonialCard(props){
    return(
        <article className = 'testimonialCard'>
            <h5>{props.data.rating}</h5>
            <section className='imageAndName'>
                <img src={props.data.image}/>
                <h4>{props.data.name}</h4>
            </section>
            <p><em>"{props.data.review}"</em></p>
        </article>
    );
}

export default TestimonialCard;