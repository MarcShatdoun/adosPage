import React from "react";
import { Link } from "react-router-dom";
import Hero from '../components/Hero'
import Header from '../components/Header'
import MainContent from '../components/MainContent'


const Main = () => {
    return (
    <div>
        <Header />
        <Hero />
        <MainContent />
    </div>
    );
};

export default Main;