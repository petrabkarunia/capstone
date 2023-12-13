import React from 'react';
import './Styles.css';
import MenuCard from './MenuCard';
import PrimaryButton from './PrimaryButton';

function Highlights(){
    return(
        <div className = 'highlights'>
            <div className='top'>
                <h1>Specials</h1>
                <PrimaryButton label='Online Menu'/>
            </div>
            <div className='bottom'>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
            </div>
        </div>
    );
}

export default Highlights;