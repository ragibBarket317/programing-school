import banner from '../../images/banner.png';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LetestCourse from '../LetestCourse/LetestCourse';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="bg-light py-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="pt-5">
                                <h1 className="text-uppercase pt-5 mt-3"><span className="mb-2">Welcome to</span><br />Programming School</h1>
                            </div>
                        </Col>
                        <Col>
                            <img className="img-fluid" src={banner} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
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