import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import img1 from '../assets/Image/Footer/img-1.jpg';
import img2 from '../assets/Image/Footer/img-2.jpg';
import Logo from '../assets/Image/Logo/logo-light.png';

function Footer(){
    return(
        <>
            <div className="Footer">
                <Container>
                    <Row className="gap-2">
                        <Col lg={3}>
                            <a href="#">
                                <img src={Logo} alt="logo" width={205} height={58} className="mb-3"/>
                            </a>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare urna a pellentesque.</p>
                            <div className="search-box mt-3">
                                <div className="search-input-wrapper">
                                    <input type="text" className="search-input" placeholder="SEARCH" />
                                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h5 className="mb-3">LATEST NEWS</h5>
                            <div className="d-flex align-items-center mb-3">
                                <img src={img1} alt="img" width={60} height={60} className="me-3" />
                                <div>
                                    <a href="#" className="news-title">Black Angel</a>
                                    <p className="text-secondary m-0">June 7, 2017</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={img2} alt="img" width={60} height={60} className="me-3" />
                                <div>
                                    <a href="#" className="news-title">Black Castle</a>
                                    <p className="text-secondary m-0">June 7, 2017</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <h4>INSTAGRAM</h4>
                        </Col>
                        <Col lg={3}>
                            <h5 className="mb-3">NEWSLETTER</h5>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare urna a pellentesque.</p>
                            <div className="search-box mt-3">
                                <div className="search-input-wrapper">
                                    <input type="text" className="search-input" placeholder="SEARCH" />
                                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="sub-Footer">
                <Container>
                <Row>
                    <Col lg={6}>
                        <a href="#">© 2017 Qode Interactive, All Rights Reserved</a>
                    </Col>
                    <Col lg={6}>
                        <span href="#" className="mx-3"><i class="fa-brands fa-facebook-f"></i></span>
                        <span href="#" className="mx-3"><i class="fa-brands fa-youtube"></i></span>
                        <span href="#" className="mx-3"><i class="fa-solid fa-basketball"></i></span>
                        <span href="#" className="mx-3"><i class="fa-brands fa-twitter"></i></span>
                    </Col>
                </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;