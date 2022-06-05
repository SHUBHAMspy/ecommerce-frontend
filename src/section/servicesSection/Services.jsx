import React from 'react'
import Testimonial from '../../components/testimonial/Testimonial'
import './style.css'

const Services = () => {
  return (
    <div>

      <div className="container">
        <div className="testimonials-box">
          <Testimonial/>
          <div className="cta-container">

            <img src="./images/cta-banner.jpg" alt="summer collection" className="cta-banner"/>

            <a href="#" className="cta-content">

              <p className="discount">25% Discount</p>

              <h2 className="cta-title">Summer collection</h2>

              <p className="cta-text">Starting @ $10</p>

              <button className="cta-btn">Shop now</button>

            </a>

          </div>

          <div className="service">

            <h2 className="title">Our Services</h2>

            <div className="service-container">

              <a href="#" className="service-item">

                <div className="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div className="service-content">

                  <h3 className="service-title">Worldwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>

                </div>

              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Next Day delivery</h3>
                  <p className="service-desc">UK Orders Only</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy & Free Return</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
              
                </div>
              
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Services