import banner from '../../images/banner.png';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LetestCourse from '../LetestCourse/LetestCourse';
// Home page
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./service.json') // call API
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="bg-light py-5">
                <Container>
                    <Row>
                        <Col className="col-12 col-md-6">
                            <div className="pt-5 text-center text-md-start">
                                <h1 className="text-uppercase pt-5 mt-3"><span className="mb-2">Welcome to</span><br />Programming School</h1>
                            </div>
                        </Col>
                        <Col className="col-12 col-md-6">
                            <img className="img-fluid" src={banner} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* call letest course section */}
            <div className="container py-5">
                <h2 className="pb-4 text-center">Our Letest Course</h2>
                <Row xs={1} md={4} className="g-3">
                    {
                        courses.slice(0, 4).map(course => <LetestCourse course={course}></LetestCourse>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;