import React from 'react';
import './Styles.css';

function PrimaryButton(props){
    return(
        <>
            <button>{props.label}</button>
        </>
    );
}

export default PrimaryButton;