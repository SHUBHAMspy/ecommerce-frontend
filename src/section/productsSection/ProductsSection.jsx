import React from 'react';
import { useNavigate } from 'react-router';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Products from '../../components/products/Products';
import SideBar from '../../components/sidebar/SideBar';
import TopProducts from '../../components/topproducts/TopProducts';
import './style.css';

const ProductsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <div className="container">
        <SideBar/>
        <div className='product-box'>
          <TopProducts/>
          <FeaturedProducts/>
          <Products/>
          <button className='shop-cta' onClick={() => navigate('/products')}>Go Shopping &gt;</button>
        </div>

      </div>  
    </div>
  )
}

export default ProductsSection