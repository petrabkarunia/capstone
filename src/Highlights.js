import React from 'react';
import './Styles.css';
import MenuCard from './MenuCard';
import PrimaryButton from './PrimaryButton';
import {menuA, menuB, menuC} from './propData'

function Highlights(){
    return(
        <section className = 'highlights'>
            <section className='top'>
                <h1>Specials</h1>
                <PrimaryButton label='Online Menu'/>
            </section>
            <section className='bottom'>
                <MenuCard data={menuA}/>
                <MenuCard data={menuB}/>
                <MenuCard data={menuC}/>
            </section>
        </section>
    );
}

export default Highlights;