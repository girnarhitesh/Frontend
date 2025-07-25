import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import "./Card.css"

function Card() {
    const [visibleCards, setVisibleCards] = useState([]);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        // Header animation
        setTimeout(() => setIsHeaderVisible(true), 200);

        // Staggered card animations
        CardData.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, 500 + index * 200);
        });
    }, []);


    const [isVisible, setIsVisible] = useState(false);
    const [animatedElements, setAnimatedElements] = useState([]);

    useEffect(() => {
        // Main section animation
        setTimeout(() => setIsVisible(true), 200);

        // Staggered element animations
        const elements = ['lightbulb', 'browser', 'email', 'profile', 'code', 'play'];
        elements.forEach((element, index) => {
            setTimeout(() => {
                setAnimatedElements(prev => [...prev, element]);
            }, 800 + index * 300);
        });
    }, []);

    const features = [
        "100% Trustworthy and readable",
        "Design is a team sport, collaborate with everyone",
        "Fast and quick response times"
    ];

    const CardData = [
        {
            name: "Analysis in real-time",
            description: "Real-time analysis refers to the process of analyzing data as it is generated or received, enabling immediate insights and actions.",
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64f86e5599ed4c91d4b206b4_Service-01.svg",
            color: "#6366f1",
            bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            name: "Encrypted data",
            description: "Encrypted data refers to information that has been transformed using cryptographic algorithms to protect it from unauthorized access.",
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64f86e55d29fa0cd3571511b_Service-02.svg",
            color: "#10b981",
            bgGradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)"
        },
        {
            name: "Fully automotive",
            description: "Fully automotive systems represent advanced technology that operates independently with minimal human intervention.",
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64f86e55b95f975874c613f1_Service-03.svg",
            color: "#f59e0b",
            bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
        },
        {
            name: "SEO optimization",
            description: "SEO optimization is the practice of improving website visibility and ranking in search engine results pages.",
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64f86e557a42611aa2be7ea1_Service-04.svg",
            color: "#ef4444",
            bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)"
        },
    ];

    const worksData = [
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fac0cca5950e98413e59a6_step-01.svg",
            name: "Register",
            description: "Create your account. No credit card is required."
        },
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fac0cda5950e98413e5a03_step-02.svg",
            name: "Connect your account",
            description: "Connect your account effortlessly to unlock a world of possibilities."
        },
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fac0ccabe05eccc852127f_step-03.svg",
            name: "You are set!",
            description: "You're all set and ready to go!"
        },
    ]

    return (
        <>
            <div className="cards-main-container">
                <div className="sectionpadding">
                    <Row gutter={[40, 40]}>
                        <Col lg={24} md={24} sm={24}>
                            <div className={`card-section-container ${isHeaderVisible ? 'animate-in' : ''}`}>
                                <div className="card-section-header">
                                    <span className="core-features-badge">
                                        <img
                                            src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                            alt="icon"
                                            className="badge-icon"
                                        />
                                        Core features
                                    </span>
                                </div>
                                <div className="card-heading">
                                    <h1>Explore our features of Cloudvista</h1>
                                </div>
                            </div>
                        </Col>
                        <Col lg={24} md={24} sm={24}>
                            <div className="cards-grid">
                                {CardData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`feature-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                                        style={{ '--delay': `${index * 0.1}s`, '--bg-gradient': item.bgGradient, '--accent-color': item.color }}
                                    >
                                        <div className="card-background-glow"></div>
                                        <div className="card-content">
                                            <div className="card-icon-container">
                                                <div className="icon-background">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="card-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                <h3 className="card-title">{item.name}</h3>
                                                <p className="card-description">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="card-hover-overlay"></div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <section className="workflow-section">
                <div className="sectionpadding">
                    <Row className='card-Row'>
                        <Col lg={12} md={24} sm={24}>
                            <div className={`workflow-visual ${isVisible ? 'animate-in' : ''}`}>
                                {/* Background Blob */}
                                <div className="background-blob"></div>

                                {/* Light Bulb */}
                                <div className={`lightbulb-element ${animatedElements.includes('lightbulb') ? 'animate' : ''}`}>
                                    <div className="lightbulb">💡</div>
                                    <div className="lightbulb-rays">
                                        <div className="ray ray-1"></div>
                                        <div className="ray ray-2"></div>
                                        <div className="ray ray-3"></div>
                                        <div className="ray ray-4"></div>
                                    </div>
                                </div>

                                {/* Main Browser Window */}
                                <div className={`browser-window ${animatedElements.includes('browser') ? 'animate' : ''}`}>
                                    <div className="browser-header">
                                        <div className="browser-controls">
                                            <span className="control-dot red"></span>
                                            <span className="control-dot yellow"></span>
                                            <span className="control-dot green"></span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="browser-content">
                                        <div className="content-card">
                                            <div className="chart-placeholder">
                                                <div className="chart-icon">📊</div>
                                            </div>
                                            <div className="content-lines">
                                                <div className="content-line"></div>
                                                <div className="content-line short"></div>
                                                <div className="content-line medium"></div>
                                            </div>
                                        </div>

                                        <div className="text-content">
                                            <div className="text-line"></div>
                                            <div className="text-line"></div>
                                            <div className="text-line short"></div>
                                            <div className="text-line"></div>
                                            <div className="text-line medium"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Notification */}
                                <div className={`email-notification ${animatedElements.includes('email') ? 'animate' : ''}`}>
                                    <div className="email-icon">✉️</div>
                                </div>

                                {/* Profile Card */}
                                <div className={`profile-card ${animatedElements.includes('profile') ? 'animate' : ''}`}>
                                    <div className="profile-header">
                                        <div className="profile-avatar">👤</div>
                                    </div>
                                    <div className="profile-content">
                                        <div className="profile-line"></div>
                                        <div className="profile-line short"></div>
                                        <div className="profile-line medium"></div>
                                    </div>
                                </div>

                                {/* Code Block */}
                                <div className={`code-block ${animatedElements.includes('code') ? 'animate' : ''}`}>
                                    <div className="code-header">
                                        <span className="code-icon">&lt;/&gt;</span>
                                    </div>
                                </div>

                                {/* Play Button */}
                                <div className={`play-button ${animatedElements.includes('play') ? 'animate' : ''}`}>
                                    <div className="play-icon">▶️</div>
                                </div>

                                {/* Floating Elements */}
                                <div className="floating-elements">
                                    <div className="floating-dot dot-1"></div>
                                    <div className="floating-dot dot-2"></div>
                                    <div className="floating-dot dot-3"></div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} md={24} sm={24}>
                            <div className={`workflow-content ${isVisible ? 'animate-in' : ''}`}>
                                <div className="visualize-badge">
                                    <img
                                        src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                        alt="icon"
                                        className="badge-icon"
                                    />
                                    Visualize
                                </div>

                                <h1 className="workflow-title">
                                    Build the perfect workflow for every project
                                </h1>

                                <p className="workflow-description">
                                    Track your entire project from start to finish with beautiful views that make project
                                    planning a breeze. Manage your resources on a List, Box, Gantt, Board, or Calendar view
                                    or create your workflow with any of clicks 10+ customizable views.
                                </p>

                                <div className="features-list">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="feature-item"
                                            style={{ animationDelay: `${1.5 + index * 0.2}s` }}
                                        >
                                            <div className="feature-bullet">•</div>
                                            <span style={{ letterSpacing: "1px", fontSize: "19px", fontWeight: "300" }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="learn-more-btn">Learn more</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <section>
                <div className="sectionpadding">
                    <Row className="works-row">
                        <Col lg={12} md={24} sm={24}>
                            <div className="works-section-container">
                                <img
                                    src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                    alt="icon"
                                    className="badge-icon"
                                />

                                Core features
                            </div>
                            <div className='Works-contant-section'>
                                <h1>How it works</h1>
                                <p>For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.</p>
                            </div>
                        </Col>
                        <Col lg={12} md={24} sm={24}>
                            <div>
                                <div>
                                    {worksData.map((item, index) => (
                                        <div key={index} className="worksdata-contant">
                                            <img src={item.img} alt="" />
                                            <p>{item.name}</p>
                                            <span>{item.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}

export default Card;