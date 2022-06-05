import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import BannerData from './BannerData'
import './style.css'

const Banner = () => {
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <div className="banner">

      <div className="container">

        <div  >
          <Slider {...settings} >
            {
              BannerData.map((data,index) => (
                <div className="slider-container">

                  <div className="slider-item" key={data.id}>
                    <img src={data.img} alt={data.heading} className="banner-img"/>
                    <div className="banner-content">
                      <p className="banner-subtitle">{data.title}</p>

                      <h2 className="banner-title">{data.heading}</h2>

                      <p className="banner-text">
                        starting at &dollar; <b>{data.price}</b>.00
                      </p>

                      <a href="#" className="banner-btn">Shop now</a>

                    </div>
                  </div>
                </div>

              ))
            }

          </Slider>

          {/* <div className="slider-item">

            <img src="./images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

          <div className="slider-item">

            <img src="./images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

          <div className="slider-item">

            <img src="./images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div> */}

        </div>

      </div>

    </div>
  )
}

export default Banner