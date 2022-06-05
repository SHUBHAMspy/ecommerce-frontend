import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { FeaturedProductsData } from './FeaturedProductsData'
import './style.css'


const FeaturedProducts = () => {
  const settings = {
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  }
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>
        

        <div className="showcase-wrapper">
          <Slider {...settings}>

              {
                FeaturedProductsData.map((data,index) => (
                  <div className="showcase-container" key={data.id}>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img src={data.img} alt={data.title} className="showcase-img"/>
                      </div>

                      <div className="showcase-content">
                        
                        <a href="#">
                          <h3 className="showcase-title">{data.title}</h3>
                        </a>

                        <p className="showcase-desc">{data.desc}</p>
                        <div className="price-box">
                          <p className="price">{data.price}</p>

                          <del>{data.oldPrice}</del>
                        </div>

                        <button className="add-cart-btn">add to cart</button>
                      </div>
                    </div>
                  </div>
                ))
              }
          </Slider>
        </div>
    </div>
  )
}

export default FeaturedProducts