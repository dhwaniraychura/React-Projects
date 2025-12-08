import React from "react";
import Video from "../assets/Video/Video_section/game_video.mp4";
function Cinematic(){
    return(
        <>
            <div className="Cinematic_section">
                <video src={Video} autoPlay muted loop playsInline className="cinematic_video"></video>
            </div>
        </>
    )
}
export default Cinematic;