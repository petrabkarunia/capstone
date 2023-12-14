import React from 'react';
import './Styles.css';
import OrderButton from './OrderButton';

function MenuCard(props){
    return(
        <div className = "menuCard">
            <img className='menuImage' src={props.data.image}/>
            <div className='text'>
                <div className='titleAndPrice'>
                    <h4>{props.data.name}</h4>
                    <h5>{props.data.price}</h5>
                </div>
                <p>{props.data.description}</p>
                <OrderButton/>
            </div>
        </div>
    );
}

export default MenuCard;