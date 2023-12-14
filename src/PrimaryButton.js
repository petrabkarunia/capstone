import React from 'react';
import './Styles.css';

function PrimaryButton(props){
    return(
        <>
            <button className='primaryButton'>{props.label}</button>
        </>
    );
}

export default PrimaryButton;