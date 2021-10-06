import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { img, title, mentor, price } = props.service;
    return (
        <Col>
            <Card className="card-style">
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h6>Mentor: {mentor}</h6>
                        <p>Price: {price}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;