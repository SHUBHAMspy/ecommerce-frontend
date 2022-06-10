import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import './style.css'
import testimonialData from './TestimonialData'

const Testimonial = () => {
  const settings = {
    arrows:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    
  }
  return (
    <div className="testimonial">
      <h2 className="title">testimonial</h2>
      <div className="testimonial-card">

        <Slider {...settings}>
          {
            testimonialData.map((testimonial,index) => (
              <div key={index}>
                <img src={testimonial.img} alt={testimonial.author} className="testimonial-banner" width="80" height="80" />
                <p className="testimonial-name">{testimonial.author}</p>
                <p className="testimonial-title">{testimonial.bio}</p>
                <img src="./images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26"/>
                <p className="testimonial-desc">{testimonial.testimonial}</p>
              </div>
            ))
          }
        </Slider>
      </div>
      
    </div>
  )
}

export default Testimonial