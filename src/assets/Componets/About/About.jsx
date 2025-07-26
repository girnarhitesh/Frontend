import React from 'react'
import "./About.css"
import { Row, Col } from 'antd'

function About() {
    return (
        <>

            {/* <div className="sectionpadding"> */}

            <div className='About-section'>
                <div className='About-section-container'>
                    <h3>Welcome to Cloudvista</h3>
                    <span>Welcome to Cloudvista, where innovation meets passion. Discover our story, mission, and commitment to excellence.</span>
                </div>
                <div className='About-img-section'>
                    <img src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/650934b763fe4ef34ef773ad_vector-14.svg" alt="" />
                </div>
            </div>
            {/* </div> */}

            <section>
                <div className="sectionpadding">
                    <div className='rating-section-container'>
                        <div className='rating-section'>
                            <h1>10</h1>
                            <p>Years of Experience</p>
                        </div>

                        <div className='rating-section'>
                            <h1>24/7</h1>
                            <p>Hours of Support</p>
                        </div>

                        <div className='rating-section'>
                            <h1>90%</h1>
                            <p>Client satisfaction</p>
                        </div>

                        <div className='rating-section'>
                            <h1>15+</h1>
                            <p>Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="sectionpadding">
                    <Row>
                        <Col>
                            <div className="team-section-container">
                                <div className="team-section" >
                                    <img src="https://cdn.prod.website-files.com/64fee7e37afe6e69e2213de7/6509275b52fcccd6a4e5b55a_team-01.svg" alt="" />
                                    <h1>Louis Ferguson</h1>
                                    <p>Data Analyst</p>
                                </div>

                                <div className="team-section">
                                    <img src="https://cdn.prod.website-files.com/64fee7e37afe6e69e2213de7/650bf3fbc295dc5083890176_team-02.svg" alt="" />
                                    <h1>
                                        Samuel Bishop
                                    </h1>
                                    <p>Project Manager</p>
                                </div>

                                <div className="team-section">
                                    <img src="https://cdn.prod.website-files.com/64fee7e37afe6e69e2213de7/650927c657f8668d5b2cdf2d_team-03.svg" alt="" />
                                    <h1>
                                        Dennis Barrett
                                    </h1>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>

    )
}

export default About
