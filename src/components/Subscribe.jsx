import React from "react";
import design from '../assets/Image/Banner/design.png';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Subscribe(){
    return(
        <>
            <div className="Subscribe_Section d-flex justify-content-center align-items-center flex-column text-center">
                <p className="fs-5">Subscribe To Our Newsletter</p>
                <h2 className="display-4">AND KEEP UP TO DATE</h2>
                <img src={design} alt="design" className="mt-3"/>
                <div className="form-section">
                    <Container>
                        <Row className="justify-content-center mt-5 newsletter-row align-items-center">
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    placeholder="YOUR NAME"
                                    className="custom-input"
                                />
                            </Col>

                            <Col md={4}>
                                <Button className="custom-btn w-100 text-center d-flex justify-content-center align-items-center">
                                    LEARN MORE
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Subscribe;