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

    return (
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
    );
}

export default Card;