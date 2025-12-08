import React from "react";
import Img1 from "../assets/Image/Portfolio/Image-1.jpg";
import Img2 from "../assets/Image/Portfolio/Image-2.jpg";
import Img3 from "../assets/Image/Portfolio/Image-3.jpg";
import Img4 from "../assets/Image/Portfolio/Image-4.jpg";
import Img5 from "../assets/Image/Portfolio/Image-5.jpg";
import Img6 from "../assets/Image/Portfolio/Image-6.jpg";
import { Row, Col } from "react-bootstrap";

function Game_Portfolio() {
  return (
    <>
      <div className="Portfolio">
          <Row className="g-0">
            <Col lg={6}>
                <div className="portfolio-item">
                    <img src={Img1} alt="img" className="portfolio-img"/>
                    <div className="portfolio-hover">
                        <h3>Son of the Black Sword</h3>
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className="portfolio-item">
                    <img src={Img2} alt="img" className="portfolio-img" />
                    <div className="portfolio-hover">
                        <h3>Wake Of Vultures</h3>
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className="portfolio-item">
                    <img src={Img3} alt="img" className="portfolio-img"/>
                    <div className="portfolio-hover">
                        <h3>The Autumn Republic</h3>
                    </div>
                </div>
            </Col>
          </Row>
          <Row className="g-0">
             <Col lg={3}>
                 <div className="portfolio-item">
                     <img src={Img4} alt="img" className="portfolio-img"/>
                     <div className="portfolio-hover">
                        <h3>Six Of Crows</h3>
                    </div>
                 </div>
             </Col> 
             <Col lg={3}>
                 <div className="portfolio-item">
                     <img src={Img5} alt="img" className="portfolio-img"/>
                     <div className="portfolio-hover">
                        <h3>Empire Ascendent</h3>
                    </div>
                 </div>
            </Col> 
             <Col lg={6}>
                 <div className="portfolio-item">
                     <img src={Img6} alt="img" className="portfolio-img"/>
                     <div className="portfolio-hover">
                        <h3>The Grace Of Kings</h3>
                    </div>
                 </div>
             </Col>
          </Row>
        </div>
    </>
  );
}

export default Game_Portfolio;
