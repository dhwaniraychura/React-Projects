import React from "react";
import Video from "../assets/Video/Game_Presents/video.mp4";
import Carousel from 'react-bootstrap/Carousel';
 import Container from "react-bootstrap/Container";
function GamePresents(){
    return(
        <>
            <div className="Video_container">
                <video src={Video} autoPlay muted loop playsInline></video>
            
            <div className="content-overlay ">
                <Container>
                    <Carousel indicators={false} controls={true} interval={3000}>
                        <Carousel.Item>
                            <div className="slide-content text-center ">
                                <h2> Hardcore Gamers </h2>
                                <p className="mt-3">"Take the hardcore gamers. The characters are way more real in the world of hardcore gamers who have played the game for hundreds and hundreds of hours. They have the movie in their heads, they've built it on their own. These guys are always very disappointed in the movies. "</p>
                                <p className="fs-4">-Uwe Boll</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                           <div className="slide-content text-center ">
                                <h2> Epic Fantasy</h2>
                                <p className="mt-3">"Fantasy encompasses a wide, wide spectrum of writing. We have beast fables, we have gothics, we have tales of vampires and werewolves, and we have sword and sorcery; we have epics from Homer, and there is just so much out there that we put under the umbrella of fantasy."</p>
                                <p className="fs-4">-Robbin Hobb</p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="slide-content">
                                <h2>Speed Up Leveling </h2>
                                <p className="mt-3">""The humanitarian developers behind World of Warcraft have also discovered a way to bribe gamers into turning off their computers and going outside. If you log off for a few days, your character will be more 'rested' when you resume playing, a mode that temporarily speeds up your leveling. ""</p>
                                <p className="fs-4">- Clive Thompson</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </div>
        </>
    )
}
export default GamePresents;