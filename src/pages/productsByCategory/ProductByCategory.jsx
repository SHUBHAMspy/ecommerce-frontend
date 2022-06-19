import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MobileNavbar from '../../components/mobile/mobileNavbar/MobileNavbar';
import Pagination from '../../components/pagination/PaginationComponent';
import SideBar from '../../components/sidebar/SideBar';
import { getCategoryProducts, getMeta } from '../../gqloperations/queries';
import { BACKEND_URL } from '../../utils/helpers';
import './style.css';

const ProductByCategory = () => {
  const [currentPage,setCurrentPage] = useState(1)
  const {id} = useParams();
  const {loading,error,data,refetch} = useQuery(getCategoryProducts,{
    variables:{
      "categoryId": id,
      "pagination": {
        "page": currentPage,
        "pageSize": 8
      }
    }
  });

  const categories = useQuery(getMeta,{
    variables:{
      "filters": {
        "id": {
          "eq": id
        }
      }
    }
  })
  
  
  let pageCount ;
  if(!categories.loading) pageCount= categories.data.categories.meta.pagination.pageCount;
  
  const changePage = (currentPage)=>{
    console.log("currentPage:" + currentPage);
    setCurrentPage(currentPage);
  }
  useEffect(() => {
    if(currentPage !== 1) refetch() 
    
  }, [currentPage,refetch])
  
  if(loading) return <h1>Loading</h1>
  if(error) console.log(error);
  return (
    <>
      <div className="product-container">
        <div className="container">
          <SideBar/>
          <div className='product-box'>
            <div className="product-main">
              <h2 className="title">{`Products in ${data.category.data.attributes.name}`}</h2>
              <div className="product-grid">
                  {
                    data.category.data.attributes.products.data.map(({id,attributes}) => (
                      
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
                            <button className="btn-action">
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
              <Pagination pageCount={pageCount} changePage={changePage}/>
          </div>

        </div>  
      </div>
      <MobileNavbar visibility={true}/>
    </>
  )
}

export default ProductByCategory