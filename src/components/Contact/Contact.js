import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// Contact Page
const Contact = () => {
    return (
        <div className="py-5 bg-light">
            <Container className="py-4">
                <h2 className="text-center mb-5">Contact Us</h2>
                <Row>
                    <Col className="border-end col-12 col-md-6">
                        <div className="pt-5 py-5">
                            <h3>Programming School</h3>
                            <p>+8801774086317</p>
                            <p>Uttor Badda, Dhaka</p>
                        </div>
                    </Col>
                    <Col className="ms-2">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Contact;