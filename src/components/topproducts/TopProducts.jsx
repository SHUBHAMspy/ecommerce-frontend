import React from 'react'
import './style.css'
import { NewArrivals, TopRated, Trending } from './TopProductsData'

const TopProducts = () => {

  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            { NewArrivals.slice(0,(NewArrivals.length)/2).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
          <div className="showcase-container">
            { NewArrivals.slice(NewArrivals.length/2,NewArrivals.length).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
        </div>
      </div>
      <div className="product-showcase">
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            { Trending.slice(0,(Trending.length)/2).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
          <div className="showcase-container">
            { Trending.slice(Trending.length/2,Trending.length).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
        </div>
      </div>
      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            { TopRated.slice(0,(TopRated.length)/2).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
          <div className="showcase-container">
            { TopRated.slice(TopRated.length/2,TopRated.length).map((data,index) => (
                <div className="showcase" key={data.id}>
                  <a href="#" className="showcase-img-box">
                    <img src={data.img} alt={data.itemName} width="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{data.itemName}</h4>
                    </a>

                    <a href="#" className="showcase-category">{data.category}</a>
                    <div className="price-box">
                      <p className="price">{data.price}</p>
                      <del>{data.oldPrice}</del>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TopProducts