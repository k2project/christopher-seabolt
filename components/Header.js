import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                christopher<span className='color--theme'>seabolt</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/#who-I-am'>
                            <a>Who I am</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#what-I-do'>
                            <a>What I do</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#my-projects'>
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#contact-me'>
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
