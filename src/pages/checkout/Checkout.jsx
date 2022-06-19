import {
  CardElement,
  Elements,
  useElements, useStripe
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Input from '../../components/common/inputComponent/Input';
import MobileNavbar from '../../components/mobile/mobileNavbar/MobileNavbar';
import { BACKEND_URL } from '../../utils/helpers';
import './style.css';
const stripePromise = loadStripe('pk_test_51LB5njSATjPYyYdgc80YYtRTpPhlJhnRUF1Bzshls0hEUHNSvt3UpLQF18sv2iKO4lsF4qalHwHhtF12j0raGOAA00timnuwH6');

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    shippingAddress: "",
    city: "",
    state: "",
    pin: 0
  });
  const [payProcessing,setPayProcessing] = useState(false);
  const [error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  
  const [done,setDone] = useState(false);
  const [paybutton,setPayButton] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const {cartTotal,items,emptyCart} = useCart();
  const navigate = useNavigate();
  const location = useLocation()

  const makePaymentRequest = async (allformData)=>{
    try{
        const res = await fetch(`${BACKEND_URL}/api/orders`,{
          method:"post",
          headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+ credentials.jwt
          },
          body:JSON.stringify(allformData)
        })
        if(res.status !== 200) {
          setErrorMessage('Payment failed')
          throw Error('Payment failed')
        } 
        return await res.json()
    } catch(err){
        console.log(err);
        setError(true);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (elements === null) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const payload = await stripe.createToken(cardElement);
    const allFormData = {
      ...formData,
      token:payload.token.id,
      amount:cartTotal || location?.state.price ,
      items:items || location?.state
    }
    
    console.log(allFormData);
    setPayProcessing(true);
    await makePaymentRequest(allFormData);
    setDone(true);
    setPayProcessing(false);
    
    emptyCart();
    
    setTimeout(() => {
      navigate('/')
    }, 5000);
  
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "shippingAddress",
      type: "text",
      placeholder: "Address",
      errorMessage:
        "Address is required",
      label: "Address",
      
      required: true,
    },
    {
      id: 2,
      name: "city",
      type: "text",
      placeholder: "City",
      errorMessage: "City is required",
      label: "City",
      required: true,
    },
    
    {
      id: 3,
      name: "state",
      type: "text",
      placeholder: "State",
      errorMessage:
        "State is required",
      label: "State",
      required: true,
    },
    {
      id: 4,
      name: "pin",
      type: "number",
      placeholder: "Pincode",
      errorMessage:
        "Pincode is required",
      label: "Pincode",
      required: true,
    },
    
  ];
  return (
    <>
      <div className="signup">
        {
          error 
            ? <div className='payment-error'>{errorMessage}</div>
            : (
              <>
                {done && <div className='success-card' >Payment done successfully</div> }
                {payProcessing && <div className='processing-card'>Payment is processing...</div>}
              </>

            )
        }
        <form onSubmit={handleSubmit}>
          <h1 className='signup-heading'>Checkout</h1>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}
          
          <label >Card Details</label>
          <div
            style={{
              padding: '15px',
              margin: "10px 0px",
              borderRadius: '5px',
              border: '1px solid gray'
            }}
          >
            <CardElement onChange={(e)=>{
              e.complete ? setPayButton(true) : setPayButton(false)
            }} 
            
            />
          </div>
          
          <button className={`pay-button ${!paybutton && 'disabled'}`} type="submit" >Pay</button>
        </form>
      </div>
      <MobileNavbar visibility={false}/>
    </>
  )
}

const Checkout = ()=>{
  return(
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout