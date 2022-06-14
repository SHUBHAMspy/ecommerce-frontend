import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useCart } from 'react-use-cart';
import MobileNavbar from '../../components/mobile/mobileNavbar/MobileNavbar';
import ReviewPopup from '../../components/reviewPopup/ReviewPopup';
import { getProduct } from '../../gqloperations/queries';
import { BACKEND_URL } from '../../utils/helpers';
import './style.css';

const Product = () => {
  const [open, setOpen] = useState(false); 
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const {addItem} = useCart();
  const {loading,error,data} =  useQuery(getProduct,{
    variables:{
      productId:id
    }
  });
  if(loading) return <h1 className='container loading-style'>Loading Plz wait</h1>
  if(error) console.log(error)
  if(data) console.log(data)

  
  const {name,price,description,images,reviews} = data.product.data.attributes;
  console.log(reviews);
  console.log(images);
  const addToCart = () => {
    addItem({
      id,
      name,
      description,
      price,
      img: images.data[0].attributes.url,
      quantity
    })
  }
  
  return (
    <>
      <div className="product-detail-container">
        <div className='product-images'>
          <div className="image-container">
            <img src={BACKEND_URL + images.data[index].attributes.url} className="product-detail-image" alt={`${name}`} />
          </div>
          <div className="small-images-container">
            {images.data?.map((item, i) => (
              <img 
                key={i}
                src={BACKEND_URL + item.attributes.url}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                alt={'small product display'}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          
          <p>{description}</p>
          <div className="price-box">
            <p className="price">${price}</p>
            <p className="old-price">$75.00</p>
          </div>
          <div className="reviews">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            
          </div>  
          <div className="quantity">

            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => {if(quantity > 1) setQuantity(quantity - 1)}} ><ion-icon name="remove-outline" className="remove-icon" ></ion-icon></span>
              <span className="num">{quantity}</span>
              <span className="plus" onClick={() => setQuantity(quantity + 1)}><ion-icon name="add-outline" className="add-icon"  ></ion-icon></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={addToCart}>Add to Cart</button>
            <button type="button" className="buy-now" >Buy Now</button>
          </div>
          
        </div>
      </div>

      <div className='product-review container'>
        <h1>Reviews</h1>
        <button className='add-review' onClick={() => setOpen(true)}>Add a Review</button>
        {reviews.data.length ? (
          <>
            {
              reviews.data.map(({attributes,id}) => {
                let ratings = [0,0,0,0,0].fill(1,0,attributes.review)
                return (
                  <div className='display-reviews' key={id}>
                    <div className='user-icon'><ion-icon name="person-outline" className='action-button'></ion-icon></div>
                    
                    <div className='comment-box'>
                      <p className='reviewer'>{ `${attributes.reviewerName}(Customer)`}</p>
                      <div className='ratings'>
                        { 
                        
                        ratings.map((value,index) => (
                          value  
                          ? <ion-icon name="star" key={index}></ion-icon> 
                          : <ion-icon name="star-outline" key={index} ></ion-icon> 
                          ))
                        }
                      </div>
                      <b>{ attributes.comment} </b>
                    </div>
                  </div>
                )
              })
            }
          </>)
          : <p className='no-reviews'>No reviews for this product</p>
        }  
      </div>
      {open && <ReviewPopup setOpen={setOpen} productId={id}/>}
      <MobileNavbar visibility={false}/>
    </>
  )
}

export default Product