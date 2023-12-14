import React from 'react';
import './Styles.css';
import MenuCard from './MenuCard';
import PrimaryButton from './PrimaryButton';
import {menuA, menuB, menuC} from './propData'

function Highlights(){
    return(
        <div className = 'highlights'>
            <div className='top'>
                <h1>Specials</h1>
                <div className='button'>
                    <PrimaryButton label='Online Menu'/>
                </div>
            </div>
            <div className='bottom'>
                <MenuCard data={menuA}/>
                <MenuCard data={menuB}/>
                <MenuCard data={menuC}/>
            </div>
        </div>
    );
}

export default Highlights;