import React from 'react';
import './Home.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Home = () => {
  return (
    <>
      <div className='images'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-block">
                <h3 className="carousel-text">"Register now to find your special someone”</h3>
              </div>
              <img src="https://www.sripriyadarshinimatrimony.com/img/slider_1.jpg" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-block">
                <h3 className="carousel-text">“Walking with your hands in mine and mine in yours, that's exactly where I want to be always.”</h3>
              </div>
              <img src="https://www.sripriyadarshinimatrimony.com/img/slider_3.jpg" className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-block">
                <h3 className="carousel-text">“The secret of a happy marriage is finding the right person. You know they're right if you love to be with them all the time.”</h3>
              </div>
              <img src="https://www.sripriyadarshinimatrimony.com/img/slider_1.jpg" className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      <div className="container fluid">
        <div className="content mt-4">
          <h2 className="heading">Find Lakhs of Indian Brides & Grooms in Sri PriyaDarshini Matrimony</h2>
          <p className="description">
            Our name Sri PriyaDarshini Matrimony, carries with it our defining history and rich legacy of success and good fortune. Come over to make an auspicious and blessed new beginning to your life partner search with <a href="https://www.sripriyadarshinimatrimony.com" target="_blank" rel="noopener noreferrer">Sri PriyaDarshini Matrimony</a>.
          </p>
          <p className="description">
            At Sri PriyaDarshini Matrimony you will find lakhs of profiles carefully sourced from across the globe and with rich information.
          </p>
          <p className="description">
            Go ahead! Click the register button and start searching. Our trust-proofed and most intuitive register-verify-validate-match and connect approach is just what you need to find your life partner.
          </p>
          <p className="description">
            Register free now, complete your profile information, do not forget to upload your photo and horoscope, search and contact the most compatible Brides or Grooms.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
