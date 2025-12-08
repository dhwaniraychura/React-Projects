import React from "react";
import Container from "react-bootstrap/Container";
import design from '../assets/Image/About/title_design.png';
function About(){
    return(
        <>
            <div className="About_Section d-flex justify-content-center align-items-center flex-column text-center">
                <Container>
                    <p>Come The End Of The World</p>
                    <h2>SEE WHAT LIES BEYOND</h2>
                    <img src={design} alt="tile design" className="mt-3" />
                    <p className="fs-5 mt-4">There is in the land of Mnar a vast still lake that is fed by no stream and out of which no stream flows. Ten thousand years ago there stood by its shore the mighty city of Sarnath, but Sarnath stands there no more.</p>
                </Container>
            </div>
        </>
    )
}
export default About;