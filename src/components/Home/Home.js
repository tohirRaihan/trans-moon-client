import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.css';

const Home = () => {
    return (
        <main>
            <section className="banner">
                <Banner></Banner>
            </section>

            <section className="features">
                <Features />
            </section>
        </main>
    );
};

export default Home;
