import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useCart } from 'react-use-cart';
import { getProduct } from '../../gqloperations/queries';
import { BACKEND_URL } from '../../utils/helpers';
import './style.css';

const Product = () => {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const {addItem} = useCart();
  const {loading,error,data} =  useQuery(getProduct,{
    variables:{
      productId:id
    }
  });
  if(loading) return <h1>Loading Plz wait</h1>
  if(error) console.log(error)
  if(data) console.log(data)

  
  const {name,price,description,images} = data.product.data.attributes;
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
    
      <div className="product-detail-container">
        <div >
          <div className="image-container">
            <img src={BACKEND_URL + images.data[index].attributes.url} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {images.data?.map((item, i) => (
              <img 
                key={i}
                src={BACKEND_URL + item.attributes.url}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
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
    
  )
}

export default Product