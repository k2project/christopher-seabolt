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
                {/* <meta
                    name='description'
                    content='A qualified and experienced psychotherapist offering a safe place for you to explore your feelings and work through difficult issues. With now available online therapy you can meet without the restrictions of place and time to get the help you need.'
                />
                <meta
                    name='keywords'
                    content='Nicola More, Counselling, Psychotherapy, London, online '
                /> */}
                <meta name='author' content='@_k2project' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                {/* <meta
                    property='og:title'
                    content='Nicola Moore | Counselling and Psychotherapy'
                />
                <meta
                    property='og:url'
                    content='https://www.nicolamooretherapy.co.uk'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='A qualified and experienced psychotherapist offering a safe place for you to explore your feelings and work through difficult issues. With now available online therapy you can meet without the restrictions of place and time to get the help you need.'
                /> */}
                {/* <meta
                    property='og:image'
                    content='https://www.nicolamooretherapy.co.uk/imgs/nicola_moore_small.png'
                /> */}

                {/* <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=UA-180574978-1'
                ></script> */}
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-180574978-1');
        `,
                    }}
                /> */}
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Header />
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
