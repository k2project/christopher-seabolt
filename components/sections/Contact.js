import React from 'react';
import Section from '../Section';

const Header = (
    <>
        <div className='paralex-title'>Let's Connect</div>
        <a href='https://www.linkedin.com/in/christopher-seabolt-144a5a/'>
            <img src='/imgs/in.png' alt='linked in account' className='in' />
        </a>
    </>
);
export default function Contact() {
    return <Section cls='bottom' header={Header}></Section>;
}
