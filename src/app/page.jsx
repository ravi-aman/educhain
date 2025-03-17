"use client"
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

const App = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.9,
            multiplier: 0.1,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container className="overflow-hidden">
            <div className="pt-[4.75rem] lg:pt-[5.25rem]">
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
            </div>
            <ButtonGradient />
        </div>
    );
};

export default App;
