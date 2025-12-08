  import Container from "react-bootstrap/Container";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import Offcanvas from "react-bootstrap/Offcanvas";
  import NavDropdown from "react-bootstrap/NavDropdown";
  import { useState } from "react";

  function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <Navbar expand="lg" className="custom-navbar" fixed="top">
          <Container>
            <Navbar.Brand href="#">
              <img src="./src/assets/Image/Logo/logo-light.png" alt="logo" className="header-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar" className="justify-content-end">
              <Nav className="menu">
                <NavDropdown title="HOME" id="home-dropdown" className="nav-dropdown hover-dropdown text-decoration-line-through">
                  <NavDropdown.Item href="#">Game Showcase</NavDropdown.Item>
                  <NavDropdown.Item href="#">eSports Home</NavDropdown.Item>
                  <NavDropdown.Item href="#">Forum Home</NavDropdown.Item>
                  <NavDropdown.Item href="#">Shop Home</NavDropdown.Item>
                  <NavDropdown.Item href="#">Concept Artist Home</NavDropdown.Item>
                  <NavDropdown.Item href="#">Blog Home</NavDropdown.Item>
                  <NavDropdown.Item href="#">Landing</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="PAGES" id="pages-dropdown" className="nav-dropdown hover-dropdown">
                  <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#">About Me</NavDropdown.Item>
                  <NavDropdown.Item href="#">Single Match</NavDropdown.Item>
                  <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="#">Coming Soon</NavDropdown.Item>
                  <NavDropdown.Item href="#">404 Error page</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="FORUM" id="forum-dropdown" className="nav-dropdown hover-dropdown">
                  <NavDropdown.Item href="#">All Forums</NavDropdown.Item>
                  <NavDropdown.Item href="#">Single Forum</NavDropdown.Item>
                  <NavDropdown.Item href="#">Topic</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="PORTFOLIO" id="portfolio-dropdown" className="nav-dropdown hover-dropdown">
                  <NavDropdown.Item href="#">
                    <span className="dropdown-arrow"><i class="fa-solid fa-caret-left"></i></span> Standard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <span className="dropdown-arrow"><i class="fa-solid fa-caret-left"></i></span> Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <span className="dropdown-arrow"><i class="fa-solid fa-caret-left"></i></span> Masonry
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <span className="dropdown-arrow">&lt;</span> Portfolio Single
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="BLOG" id="blog-dropdown" className="nav-dropdown hover-dropdown">
                  <NavDropdown.Item href="#">Latest Posts</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="SHOP" id="shop-dropdown" className="nav-dropdown hover-dropdown">
                  <NavDropdown.Item href="#">Products</NavDropdown.Item>
                  <NavDropdown.Item href="#">Cart</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown  title="ELEMENTS" id="elements-dropdown" className="nav-dropdown hover-dropdown mega-dropdown position-static">
                  <div className="mega-menu">
                    <div className="mega-column">
                      <a href="#">Classic</a>
                      <a href="#">Accordions & Toggles</a>
                      <a href="#">Buttons</a>
                      <a href="#">Call To Action</a>
                      <a href="#">Contact Form</a>
                      <a href="#">Icon With Text</a>
                      <a href="#">Separators</a>
                      <a href="#">Tabs</a>
                    </div>
                    <div className="mega-column">
                      <a href="#">Infographic</a>
                      <a href="#">Google Maps</a>
                      <a href="#">Countdown</a>
                      <a href="#">Counters</a>
                      <a href="#">Pie Charts</a>
                      <a href="#">Progress Bar</a>
                      <a href="#">Process</a>
                      <a href="#">Image Gallery</a>
                    </div>
                    <div className="mega-column">
                      <a href="#">Presentation</a>
                      <a href="#">Blog Slider</a>
                      <a href="#">Card Slider</a>
                      <a href="#">Portfolio List</a>
                      <a href="#">Team</a>
                      <a href="#">Testimonials</a>
                      <a href="#">Video Button</a>
                      <a href="#">Comparison Pricing Tables</a>
                    </div>
                    <div className="mega-column">
                      <a href="#">Typography</a>
                      <a href="#">Blockquote</a>
                      <a href="#">Columns</a>
                      <a href="#">Custom Font</a>
                      <a href="#">Dropcaps</a>
                      <a href="#">Headings</a>
                      <a href="#">Highlights</a>
                      <a href="#">Icon List Item</a>
                    </div>
                  </div>
                </NavDropdown>

                <Nav.Link onClick={handleShow}><i class="fa-solid fa-bars"></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-bg">
          <Offcanvas.Header closeButton className="mx-4">
            <Offcanvas.Title><img src="./src/assets/Image/Logo/logo-light.png" alt="logo" className="header-logo" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="mx-5 mt-4">
            <div className="search-box mb-5">
              <div className="search-input-wrapper">
                <input type="text" className="search-input" placeholder="SEARCH"/>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </div>
            </div>
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
            <a href="#">YOUTUBE</a>
            <a href="#">INSTAGRAM</a>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Header;
