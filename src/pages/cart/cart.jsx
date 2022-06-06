import React, { useState } from "react"
import { useNavigate } from "react-router"
import { useCart } from "react-use-cart"
import { BACKEND_URL } from "../../utils/helpers"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [checkout,setCheckout] = useState(false)
  const {isEmpty,items,cartTotal,removeItem,addItem,updateItemQuantity} = useCart()
  const navigate = useNavigate();
  // const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

 
  return (
    <>
      <section className='cart-items'>
        <div className='container cart-flex'>
          

          <div className='cart-details'>
            {isEmpty && 
              ( 
                <div className= 'no-items' >
                  <h1 className='product'>No Items are added in Cart</h1>
                  <img src="./images/emptycart.png" alt="Noitems" />
                  <button className='shopnow-cta' onClick={() => navigate('/products')}> &lt; Shop Now</button>
                </div>
              )
            }

            {items.map((item) => {
              return (
                <div className='cart-list  d_flex' key={item.id}>
                  <div className='img'>
                    <img src={BACKEND_URL + item.img} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.quantity} =
                      <span>${item.itemTotal}.00</span>
                    </h4>
                    <div className='cartControl d_flex'>
                      
                      <button className='incCart' onClick={() => updateItemQuantity(item.id,item.quantity - 1)}>
                        <ion-icon name="remove-outline" ></ion-icon>
                      </button>
                      <button className='desCart' onClick={() => addItem(item)}>
                        <ion-icon name="add-outline" ></ion-icon>
                      </button>
                    </div>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button onClick={()=>removeItem(item.id)}>
                        <ion-icon name="close-outline"></ion-icon>
                      </button>
                    </div>
                    
                    
                    <div className='cart-item-price'>${item.itemTotal}</div>
                  </div>

                </div>
              )
            })}
          </div>

          {
            !isEmpty &&
              (
                <div className='cart-total product'>
                  <h2>Cart Summary</h2>
                  <div className='total-flex'>
                    <h4>Total Price :</h4>
                    <h3>${cartTotal}.00</h3>
                  </div>
                  
                  <button type="button" className="buy-now" >Buy Now</button>
                  
                </div>
              )
          }
        </div>
      </section>
    </>
  )
}

export default Cart