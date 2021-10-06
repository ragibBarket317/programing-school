import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="bg-light p-5">
            <div className="container">
                <h1 className="pb-3">Our Services</h1>
                <Row xs={1} md={3} className="g-5">
                    {
                        services.map(service => <Course service={service}></Course>)
                    }
                </Row>
            </div>
        </div>

    );
};

export default Service;