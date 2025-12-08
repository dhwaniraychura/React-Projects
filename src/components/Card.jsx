import React from "react"
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/Image/Card_Section/Image-1.jpg'
import Image2 from '../assets/Image/Card_Section/Image-2.jpg'
import Image3 from '../assets/Image/Card_Section/Image-3.jpg'
import Image4 from '../assets/Image/Card_Section/Image-4.jpg'
import Image5 from '../assets/Image/Card_Section/Image-5.jpg'
import Image6 from '../assets/Image/Card_Section/Image-6.jpg'
import Image7 from '../assets/Image/Card_Section/Image-7.jpg'
import Image8 from '../assets/Image/Card_Section/Image-8.jpg'
import Image9 from '../assets/Image/Card_Section/Image-9.jpg'
import design from '../assets/Image/About/title_design.png';
function Card(){
    const CardsData = [
        {
            id: 1,
            img: Image1 ,
            title: "Elf",
            desc: "An adventurer clad in fireproof steel with an unquenchable thirst for dragon hunting"
        },
        {
            id: 2,
            img:  Image2 ,
            title: "Bushi",
            desc: "A nimble nobleman from a distant land with a sole purpose of honing his skill"
        },
        {
            id: 3,
            img: Image3,
            title: "Fire Seeker",
            desc: "A remnant of a former saint, a swordmaster with a hefty blade once used to protect."
        },
        {
            id: 4,
            img: Image4,
            title: "Half-Orc",
            desc: "A nimble nobleman from a distant land with a sole purpose of honing his skill"
        },
        {
            id: 5,
            img: Image5,
            title: "Moon Folk",
            desc: "A remnant of a former saint, a swordmaster with a hefty blade once used to protect."
        },
         {
            id: 6,
            img: Image6,
            title: "Draeni",
            desc: "An adventurer clad in fireproof steel with an unquenchable thirst for dragon hunting"
        },
         {
            id: 7,
            img: Image7,
            title: "Charr",
            desc: "A nimble nobleman from a distant land with a sole purpose of honing his skill"
        },
         {
            id: 8,
            img:Image8,
            title: "Goliath",
            desc: "A remnant of a former saint, a swordmaster with a hefty blade once used to protect."
        },
         {
            id: 9,
            img: Image9,
            title: "Dragon Slayer",
            desc: "An adventurer clad in fireproof steel with an unquenchable thirst for dragon hunting"
        }
    ];

    const chunkArray = (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const slides = chunkArray(CardsData, 3);
    
    return(
        <>
            <div className="Card_section d-flex justify-content-center align-items-center flex-column text-center">
                <Container>
                    <div className="card-text text-center">
                        <p className="fs-5">Thread Thine Path</p>
                        <h2>WITH A CAREFUL STEP</h2>
                        <img src={design} alt="design" className="mt-3" />
                        <p className="fs-5 mt-4">There is in the land of Mnar a vast still lake that is fed by no stream and out of which no stream flows.</p>
                    </div>
                    <Carousel className="mt-5"  controls={false} id="cardIndicators">
                        {slides.map((group, index) => (
                            <Carousel.Item interval={2000} key={index}>
                                <div className="cards-row">
                                    {group.map((item) => (
                                        <div className="cards" key={item.id}>
                                            <div className="card-img ">
                                                <img src={item.img} alt={item.title} width={404} height={263} />
                                            </div>
                                            <div className="card-content">
                                                <h5 className="mt-3">{item.title}</h5>
                                                <p className="fs-6">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}

                    </Carousel>

                </Container>
            </div>
        </>
    )
}
export default Card;