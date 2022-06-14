import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { getAllProducts } from '../../gqloperations/queries';
import { BACKEND_URL } from '../../utils/helpers';
import './style.css';

const Products = ({currentPage,getPageCount}) => {
  //const [page,setPage] = useState(1)
  const {addItem} = useCart();
  const {loading,error,data,refetch} = useQuery(getAllProducts,{
    variables:{
      "pagination": {
        "page": currentPage,
        "pageSize": 8
      }
    }
  });

  
  console.log('page:' + currentPage);
  useEffect(() => {
    // const updatePage = () => {
    //   setPage(currentPage)
    // }
    // updatePage()
    if(currentPage !==1) refetch() 
  }, [currentPage,refetch])
  
  
  const givePageCount = () => {
    if(getPageCount) getPageCount(data.products.meta.pagination.pageCount);
    
  }
  
  if(loading) return <h1 className='loading-style'>Loading Please wait...</h1>
  if(error) console.log(error);
  
  if(!loading) givePageCount()
    
  
  console.log(data);
  //console.log(data.products.meta.pagination.pageCount);
  const addToCart = (id,name,price,images) => {
  
    addItem({
      id,
      name,
      price,
      img: images.data[0].attributes.url,
      quantity:1
    })
  }
  
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {
          data.products.data.map(({id,attributes}) => (
            <div className="showcase" key={id}>
              <div className="showcase-banner">
                <img src={BACKEND_URL + attributes.images.data[0].attributes.url} alt={attributes.name} width="300" className="product-img default"/>
                <img src={BACKEND_URL + attributes.images.data[1].attributes.url} alt={attributes.name} width="300" className="product-img hover"/>
                <div className="showcase-actions">
                  <button className="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="repeat-outline"></ion-icon>
                  </button>
                  <button 
                    className="btn-action"
                    onClick={() => {
                      const {name,price,images} = attributes;
                      addToCart(id,name,price,images);
                    }}
                  >
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>
              <div className="showcase-content">
                <Link to={`/category/${attributes.category.data.id}`} className="showcase-category">{attributes.category.data.attributes.name}</Link>
                <Link to={`/product/${id}`}>
                  <h3 className="showcase-title">{attributes.name}</h3>
                </Link>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>
                <div className="price-box">
                  <p className="price">{`$${attributes.price}`}</p>
                  <del>$75.00</del>
                </div>
              </div>
              
            </div>

          ))
        }

      </div>
    </div>
  )
}

export default Products