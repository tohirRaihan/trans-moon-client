import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <main>
            <section className="banner">
                <Banner />
            </section>

            <section className="features">
                <Features />
            </section>

            <section className="about my-5">
                <About />
            </section>

            <section className="services my-5">
                <Services />
            </section>
        </main>
    );
};

export default Home;
