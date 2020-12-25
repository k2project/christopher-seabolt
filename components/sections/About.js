import React from 'react';
import Section from '../Section';

const Header = (
    <>
        <div className='paralex-title'>
            Early-stage Venture <br />
            Gamechanger
        </div>
        <p className='paralex-subtitle'>
            Top 5% Industry Performance, Returns Weighted.
        </p>
    </>
);
export default function About() {
    return (
        <Section cls='top' header={Header}>
            <div className='wrapper wrapper-w-padding'>
                <h2></h2>
                <h3 className='section-subtitle'>
                    Venture Capital Professional - Generalist Technology,
                    Specialist Early-stage.
                </h3>
                <p>
                    Christopher holds over 30 years of venture capital and
                    operational experience in early-stage growth companies.
                </p>
                <p>
                    Of almost 20 deals across multiple funds in the early-stage
                    sector, consisting entirely of Seed and Start-up,
                    Christopher has engineered successful (+money) exits for
                    well over half of these, with extraordinarily high returns
                    across all managed portfolios.
                </p>
                <p>
                    This coveted position was achieved through a combination of
                    technical financial and investment skills, combined with
                    broad and deep management experience well beyond that
                    typically available to early-stage companies and founder
                    teams.
                </p>
            </div>
        </Section>
    );
}
