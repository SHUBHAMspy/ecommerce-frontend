import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { addReview } from '../../gqloperations/mutations';
import './style.css';

const ReviewPopup = ({setOpen,productId}) => {
  const [openReview, setOpenReview] = useState(true)
  const [comment, setComment] = useState('')
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);    
  const [submitReview,{loading,error,data}] = useMutation(addReview);
  
  if(error) console.log(error);
  
  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "OK";
      case 1:
        return "Poor";
      case 2:
        return "Dissatisfied";
      case 3:
        return "Good";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "OK";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const closeReview = () => {
    setOpenReview(!openReview);
    setOpen(!openReview);
  }
  
  return (
    openReview && (

      <div className="review-popup">
        <div className="popup">
          <div className="content">
            {/* <div className="review-product">
              
              <h1>Iphone 13</h1>
            </div> */}
            <div className='closeButton'>
              <button onClick={() => closeReview()} >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
            <div className='review-box'>
              <p className='review-text'>{handleText()}</p>
              <div className='reviews'>

                {Array(5)
                  .fill()
                  .map((_, index) =>
                    number >= index + 1 || hoverStar >= index + 1 ? (
                      <ion-icon 
                        name="star"
                        onMouseOver={() => number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        onClick={() => setNumber(index + 1)}
                        key={index}
                      ></ion-icon>
                    ) : (
                      <ion-icon 
                        name="star-outline"
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        onClick={() => setNumber(index + 1)}
                        key={index}
                      ></ion-icon>
                    )
                  )}
              </div>
            </div>
            <textarea placeholder={handlePlaceHolder()} value={comment} onChange={handleChange}></textarea>
            <button 
              className={`submit-review ${!number && "disabled"} `} 
              onClick={() => submitReview({
                variables:{
                  data:{
                    "review":number,
                    "comment":comment || handleText(),
                    "reviewerName":JSON.parse(localStorage.getItem("credentials"))?.name,
                    "product": productId 
                  }
                },
                context:{
                  headers:{
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("credentials"))?.jwt}`
                  }
                }
              }) }
            > Submit
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default ReviewPopup