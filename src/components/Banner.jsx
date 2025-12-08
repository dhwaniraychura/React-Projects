import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/Image/Banner/Image-1.png';
import Image2 from '../assets/Image/Banner/Image-2.png';
import Image3 from '../assets/Image/Banner/Image-3.png';
import design from '../assets/Image/Banner/design.png';

function Banner() {
  return (
    <Carousel fade controls indicators>
      <Carousel.Item>
        <div className="banner-slide" style={{ backgroundImage: `url(${Image1})` }}>
          <div className="banner-content">
            <h2>AGE OF THE DRAGON</h2>
             <img src={design} alt="title_design_img" className='mt-2'/>
            <p className="mt-4">That is not dead which can eternal lie, and with strange eons even death may die.</p>
           
            <button className="banner-btn mt-4">BUY THEME</button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="banner-slide" style={{ backgroundImage: `url(${Image2})` }}
        >
          <div className="banner-content">
            <h2>BLAZING FIRE</h2>
             <img src={design} alt="title_design_img" className='mt-2'/>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="banner-btn">BUY THEME</button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="banner-slide" style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="banner-content">
            <h2>RISE OF HERO</h2>
             <img src={design} alt="title_design_img" className='mt-2'/>
            <p className="mt-4">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="banner-btn">BUY THEME</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
