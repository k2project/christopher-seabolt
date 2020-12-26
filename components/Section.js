import React, { Fragment, useEffect, useRef } from 'react';

export default function Section({ cls, header, children }) {
    const img = useRef(null);
    const onScroll = () => {
        let top = img.current.parentElement.getBoundingClientRect().top;
        img.current.style.top = -top * 0.2 + 'px';
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <Fragment>
            <section className={'paralex ' + cls}>
                <div className='paralex-img' ref={img}></div>
                <div className='paralex-cover'>{header}</div>
            </section>
            {children}
        </Fragment>
    );
}
