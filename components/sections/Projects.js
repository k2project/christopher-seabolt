import React from 'react';

import Section from '../Section';

const ProjectsList = <ul>logos go here</ul>;

const Header = (
    <div className='projects-header' id='my-projects'>
        <div className='wrapper'>
            <div className='projects-count'>
                <b>12+</b>International Projects
            </div>
            <a href='https://www.linkedin.com/in/christopher-seabolt-144a5a/'>
                Learn more at LinkedIn
            </a>
            {ProjectsList}
        </div>
    </div>
);

export default function Projects() {
    return <Section cls='projects' header={Header} />;
}
