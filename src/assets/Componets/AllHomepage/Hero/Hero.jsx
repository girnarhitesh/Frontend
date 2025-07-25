import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import './Hero.css';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const trustedCompanies = [
        { name: "ICEBERG", logo: "🏔️" },
        { name: "Leafe", logo: "🍃" },
        { name: "Greenish", logo: "🌱" },
        { name: "Automation", logo: "⚙️" }
    ];

    return (
        <div className="hero-container">
            <div className="sectionpadding">
                <Row className='Hero-row' style={{ display: "flex" }}>
                    <Col lg={12} md={24} sm={24}>
                        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
                            <h1 className="hero-title">
                                Manage & optimize your daily tasks or project
                            </h1>
                            <p className="hero-description">
                                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home
                                office, the way your team works is unique - accomplish it all with{' '}
                                <span className="brand-name">Cloudvista</span>.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn-primary">Get started</button>
                                <button className="btn-secondary">Book a demo</button>
                            </div>
                            <div className="trusted-section">
                                <p className="trusted-text">Trusted company :</p>
                                <div className="company-logos">
                                    {trustedCompanies.map((company, index) => (
                                        <div key={index} className="company-logo" style={{ animationDelay: `${1.5 + index * 0.2}s` }}>
                                            <span className="logo-icon">{company.logo}</span>
                                            <span className="company-name">{company.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24} sm={24}>
                        <div className={`hero-image ${isVisible ? 'animate-in' : ''}`}>
                            <div className="dashboard-container">
                                <div className="lightbulb-icon"><img src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64f86197315ed203922a2313_decoration-01.svg" alt="" /></div>
                                <img src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64faa464a1cc841036f3444e_vector-01.svg" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row >
            </div>
        </div >
    );
}

export default Hero