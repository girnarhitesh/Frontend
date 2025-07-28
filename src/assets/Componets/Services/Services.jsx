import React, { useEffect,useState } from 'react';
import { Row, Col } from 'antd';
import 'aos/dist/aos.css'; // AOS CSS
import Aos from 'aos';
import "./Services.css";



function Services() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [visibleSteps, setVisibleSteps] = useState([]);

    const worksData = [
        {
            name: "Register",
            description: "Create your account. No credit card is required.",
            img: "👤",
            color: "#8b5cf6",
            bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            step: "01"
        },
        {
            name: "Connect your account",
            description: "Connect your account effortlessly to unlock a world of possibilities.",
            img: "🔗",
            color: "#f97316",
            bgGradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            step: "02"
        },
        {
            name: "You are set!",
            description: "You're all set and ready to go!",
            img: "✓",
            color: "#ec4899",
            bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            step: "03"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsHeaderVisible(scrollTop > 100);

            const stepsInView = [];
            worksData.forEach((_, i) => {
                if (scrollTop > 300 + i * 100) stepsInView.push(i);
            });
            setVisibleSteps(stepsInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ServicesDataitem = [
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650a99f7c1ac388a6a543963_service-01.svg",
            color: "#FF7B4E",
            name: "Customer support",
            description: "Assistance and support for customers to address queries, concerns, or issues.",
        },
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650a9d2d88780bacbde849b1_service-02.svg",
            color: "#FE98FE",
            name: "Super performance",
            description: "Experience super performance like never before.",
        },
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650a9dd0e8773232007b1bb6_service-03.svg",
            color: "#C8BFFF",
            name: "100% Response time",
            description: "Count on our team to be there for you whenever you need assistance.",
        },
        {
            img: "https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650a9eaf6152c2eaf68bf123_service-04.svg",
            color: "#FFE85B",
            name: "Search optimization",
            description: "Boost your online visibility with our comprehensive search optimization.",
        },
    ];

    useEffect(() => {
  Aos.init({ duration: 1000 }); // animation duration in ms
}, []);
    return (
        <>
            <section>
                <div className="sectionpadding">
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div className="Services-page-section">
                                <div className="services-section">
                                    <div className="core-features-badge">
                                        <img
                                            src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                            alt="icon"
                                            className="badge-icon"
                                        />
                                        Services
                                    </div>
                                    <h1>Delivering excellence every day</h1>
                                    <span>Join us in celebrating our exceptional team of service heroes, individuals who go above and beyond to make a difference in the lives of our customers. Each day, they embody our commitment to excellence, delivering outstanding service with a smile.</span>
                                </div>
                                <div className="Services-img-section">
                                    <img src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650a8e20fdc5045f2b9986d5_vector-16.svg" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="how-it-works-section">
                <div className="sectionpadding">
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div className={`works-header ${isHeaderVisible ? 'animate-in' : ''}`}>
                                <div className="core-features-badge">
                                    <img
                                        src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                        alt="icon"
                                        className="badge-icon"
                                    />
                                    Core features
                                </div>
                                <div className="works-content-section">
                                    <h1>How it works</h1>
                                    <p>For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.</p>
                                </div>
                            </div>

                            <div className="works-steps-container">
                                {worksData.map((item, index) => (
                                    <div key={index} className="step-wrapper">
                                        <div
                                            className={`works-step-card ${visibleSteps.includes(index) ? 'visible' : ''}`}
                                            style={{
                                                '--delay': `${index * 0.1}s`,
                                                '--bg-gradient': item.bgGradient,
                                                '--accent-color': item.color
                                            }}
                                        >
                                            {/* Step Number */}
                                            <div className="step-number">{item.step}</div>

                                            {/* Icon Container */}
                                            <div className="step-icon-container">
                                                <div className="icon-background">
                                                    <span className="step-icon">{item.img}</span>
                                                </div>
                                                <div className="icon-glow"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="step-content">
                                                <h3 className="step-title">{item.name}</h3>
                                                <p className="step-description">{item.description}</p>
                                            </div>

                                            {/* Connecting Line */}
                                            {index < worksData.length - 1 && (
                                                <div className="connecting-line">
                                                    <div className="line-progress"></div>
                                                </div>
                                            )}

                                            {/* Hover Overlay */}
                                            <div className="hover-overlay"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <section>
                <div className="sectionpadding">
                    <Row>
                        <Col lg={24} md={24} sm={24} className='ServicesData-Col' style={{ background: "black", padding: "35px", borderRadius: "35px" }}>
                            <div  >
                                <div className="core-features-badge" style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",width:"20vh"}}>
                                    <img
                                        src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg"
                                        alt="icon"
                                        className="badge-icon"
                                    />
                                    Services
                                </div>
                            </div>
                            <div className="servicesdata-section-container" >
                                <div className="servicesData-section">
                                    <h1 style={{ color: "white",textAlign:"center",marginTop:"2vh" }}>Elevate your experience with us</h1>
                                </div>
                                <div className="ServicesData-section-containers" >
                                    {ServicesDataitem.map((item, index) => (
                                        <div key={index} className="ServicesData-img-section" style={{ backgroundColor: item.color }} data-aos="fade-up"
                                            data-aos-duration="2000">
                                            <img src={item.img} alt={item.name} />
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
    )
}

export default Services
