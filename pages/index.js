import Head from 'next/head';
import { Fragment } from 'react';
// import '../styles/styles.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Demo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>
                <Section cls='top' header={<> <h2 className='paralex-title'>Early-stage Venture <br/>Gamechanger</h2>
                    <p className='paralex-subtitle'>
                    Top 5% Industry Performance, Returns Weighted.
                    </p></>}>
                    <h2>Venture Capital Professional - Generalist Technology, Specialist Early Stage</h2>
                <p>
                        Christopher holds over 30 years of venture capital and operational experience in early-stage growth companies.  
                </p>
                    <p>Of almost 20 deals across multiple funds in the early-stage sector, consisting entirely of Seed and Start-up, Christopher has engineered successful (+money) exits for well over half of these, with extraordinarily high returns across all managed portfolios. </p>
                    <p>This coveted position was achieved through a combination of technical financial and investment skills, combined with broad and deep management experience well beyond that typically available to early-stage companies and founder teams. </p>
               
                </Section>
                <Section cls='middle' header={<> <h2 className='paralex-title'>Navigate to Success</h2>
                    <p className='paralex-subtitle'>
                    Drive rapid scale to enhanced exit returns.
                    </p>
                    {/* <div className='btn-box'>
                        <button className='btn btn--theme'>Other Action</button>
                    </div> */}
                </>
                }>
                    <h2> No company failed because things went according to plan. </h2>
                    <p> The world of and approach to early-stage venture investing ceased to make pragmatic sense decades ago.  </p>
                    <p>Realized returns are fundamental but seem largely absent from focus. The industry is driven by a focus on PR and not IRR. There is no other financial sector where achievable returns are as of little relevance. This is not sustainable. </p>
                    <p>
                    There is a misconception that if you provide capital to early-stage companies, they are positioned to succeed. Pragmatic execution strategies on deployed capital are the primary failure point in early-stage. Venture investors at these stages must not only provide capital but bridge operational and executional competences. 
                    </p>

                    <p>When the combination of these competences have been brought together and made available to early-stage companies, Christopher delivered market leading results across a broad spectrum of industries. </p>


                    <ul>
                        <li>Business plans must reflect pragmatic go-to-market strategies, with target markets of sufficient size to accommodate early-stage risk. </li>
                        <li>Products must be developed to pragmatic market needs. There are too many solutions looking for a problem, and far too many overengineered solutions predicated on the technology aspects of the product enhancing price relative to simpler, less engineering intensive and lower cost alternatives. </li>
                        <li>Execution strategies within these target markets must be pragmat</li>
                        <li>Execution strategies within these target markets must be pragmatic in terms of achievable results within limited cash and human resource constraints. </li>
                        <li>Operational infrastructures must be pragmatically large enough to achieve target go-to-market execution goals, while pragmatically small enough to maximize benefit across limited resources. </li>
                    </ul>

                    <p>Early-stage companies usually lack these competences in house. Expecting successful capital deployment with this lacking isn’t pragmatic. Expecting good ideas to build multi-million-dollar revenue streams in and of themselves isn’t pragmatic. </p>
                    <p><b>“It’s in the execution of the business model, stupid…”</b></p>
                    
                   
                </Section>
                <Section cls='bottom' header={<>
                    <h2 className='paralex-title'>Let's talk business!</h2>
                    <p className='paralex-subtitle'>
                        You can say what you want here. Just sell it!
                    </p>
                    {/* <div className='btn-box'>
                        <button className='btn btn--theme'>Take action</button>
                    </div> */}
                </>}>
                </Section>
            </main>
            <Footer />
        </Fragment>
    );
}
