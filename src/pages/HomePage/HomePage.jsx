import React from 'react';
import { useMediaQuery } from 'react-responsive'
import sprite from '../../images/sprite.svg'
import Balance from '../../component/Balance'
import Calendar from '../../component/Calendar/Calendar'

import  {Mobile}  from './Mobile/Mobile';

import s from './HomePage.module.scss'

export const HomePage = () => {

    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 })

    return (
        <section className="background">
            <div className="container">
                {isMobile && <Mobile/>}
            </div>
        
        </section>
    );
};
