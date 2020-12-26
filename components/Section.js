import React, { useEffect, useRef } from 'react';
import Header from './Header';

export default function Section({ cls, header, children, showNav = false }) {
    const img = useRef(null);
    const onScroll = () => {
        let top = img.current.parentElement.getBoundingClientRect().top;
        img.current.style.top = -top * 0.3 + 'px';
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <>
            <section className={'paralex ' + cls}>
                <div className='paralex-img' ref={img}></div>
                <div className='paralex-cover'>{header}</div>
                {showNav && <Header />}
            </section>
            {children}
        </>
    );
}
