import about from '../../images/about.jpg'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// About Page
const About = () => {
    return (
        <div className="bg-light py-5">
            <Container className="py-md-5">
                <Row>
                    <Col className="col-12 col-md-6">
                        <div className="pt-md-5">
                            <h2>About Us</h2>
                            <p>Programming is a funnny thing. Now a days it is very high demandable all over the world. Any student learn programming. we can teach all programing language. we have 25 teachers. our all teachers are very friendly with  students. They teach very carefully. We have 2250 students at this time. They are doing well. So we hope , you can enjoy our service. </p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <img className="img-fluid" src={about} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;