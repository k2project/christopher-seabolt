import Head from 'next/head';
import { Fragment } from 'react';
// import '../styles/styles.scss';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>
                    Christopher Seabolt | Venture Capital Professional
                </title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {/* <Header /> */}
            <main>
                <About />
                <Work />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </Fragment>
    );
}
