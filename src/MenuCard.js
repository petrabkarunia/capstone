import React from 'react';
import './Styles.css';
import OrderButton from './OrderButton';

function MenuCard(){
    return(
        <div className = "menuCard">
            <img src='#'/>
            <div style={{display: 'flex'}}>
                <h4>Name</h4>
                <h5>Price</h5>
            </div>
            <p>Description</p>
            <OrderButton/>
        </div>
    );
}

export default MenuCard;