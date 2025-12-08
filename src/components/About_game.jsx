import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Poster from '../assets/Image/Game/game-poster.png';

function About_game() {
    return (
        <>
            <div className="About_game d-flex justify-content-center align-items-center py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} className="text-center">
                            <img src={Poster} alt="Poster" className="img-fluid game-poster" />
                        </Col>
                        <Col md={7} className="text-light">
                            <h2 className="mb-3 preorder-title">PREORDER NOW!</h2>
                            <p className="game-desc">
                                But half buried in the rushes was spied a curious green idol of 
                                stone; an exceedingly ancient idol coated with seaweed and 
                                chiselled in the likeness of Bokrug, the great water-lizard. 
                                That idol, enshrined in the high temple at Ilarnek, was 
                                subsequently worshipped beneath the gibbous moon throughout 
                                the land of Mnar.
                            </p>
                            <button className="banner-btn mt-4 px-5 py-2">PREORDER</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About_game;
