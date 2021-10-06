import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './LetestCourse.css'

const LetestCourse = (props) => {
    const { img, title, mentor, price } = props.course;
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

export default LetestCourse;