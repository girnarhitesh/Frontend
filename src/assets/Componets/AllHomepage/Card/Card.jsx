import React from 'react'
import "./Card.css"
import { Row, Col } from 'antd'

function Card() {
    return (
        <>
            <div className="sectionpadding">
                <Row>
                    <Col lg={12} sm={16} md={24}>
                        <div className="Card-section-container">
                            <div className="card-section-header">
                                <span><img src="https://cdn.prod.website-files.com/64f6bfb294370bcdf0b9915d/64fedaf963a9b4d0ee8446fe_dark-sub-icon.svg" alt="" />Core features</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Card
