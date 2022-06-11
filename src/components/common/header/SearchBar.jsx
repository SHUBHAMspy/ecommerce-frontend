import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { getProductByName } from '../../../gqloperations/queries';

const SearchBar = () => {
  const {totalItems} = useCart();
  const [nameQuery,setNameQuery] = useState("");
  const [hideResult,sethideResult] = useState(true);
  const navigate = useNavigate()
  
  const [getProduct,{loading,error,data}] = useLazyQuery(getProductByName,{
    variables:{
      "filters": {
        "name": {
          "contains": nameQuery
        }
      }
    }
  })

  useEffect(() => {
    if(nameQuery.length > 1 ){
      getProduct();
      sethideResult(false);
    }
    else{
      sethideResult(true);
    }
  
  }, [nameQuery])
  
  
  const handleChange=(e)=>{
    setTimeout(()=>{
      setNameQuery(e.target.value)  
    },1000)

  }

  //const credentials?{jwt,name}:credentials = JSON.parse(localStorage.getItem("credentials"));

  return (
    <div className="header-main">

      <div className="container">

        <Link to={'/'} className="header-logo">
          <h1>Ania</h1>
        </Link>

        <div className="header-search-container">

          <input onChange={handleChange}  type="search" name="search" className="search-field" placeholder="Enter your product name..."/>

          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          
          <div className='search-item' hidden={hideResult}>
            {data &&
              data.products.data.map(({id,attributes}) => (
                <div key={id} onClick={() => setNameQuery("")} >
                  <Link to={`/product/${id}`} >{attributes.name}</Link>
                </div>
              ))
            }          
          </div>

        </div>

        <div className="header-user-actions">

          <button className="action-btn" style={{fontSize:"32px"}} >
            {JSON.parse(localStorage.getItem("credentials"))?.jwt 
              ?(
                <>
                  <ion-icon name="person-outline"></ion-icon>
                  <p className='username'>{JSON.parse(localStorage.getItem("credentials"))?.name}</p>
                </>
              ): <p className='loginText' onClick={() => navigate('/login') }>Login</p> 
            }
          </button>

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>

          <Link to={'/cart'}>
            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">{totalItems}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar