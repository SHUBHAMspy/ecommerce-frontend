import React, { useState } from 'react'
import MobileNavbar from '../../components/mobile/mobileNavbar/MobileNavbar'
import Pagination from '../../components/pagination/PaginationComponent'
import Products from '../../components/products/Products'
import SideBar from '../../components/sidebar/SideBar'
import './style.css'

const ProductsPage = () => {
  const [page,setPage] = useState(1)
  const [pageCount,setPageCount] = useState(1);
  const getPageCount = (count) => {
    setPageCount(count);
  }
  const changePage = (currentPage)=>{
    console.log("currentPage:" + currentPage);
    setPage(currentPage);
  }
  return (
    <>
      <div className="product-container">
        <div className="container">
          <SideBar />
          <div className='product-box'>
            <Products getPageCount={getPageCount} currentPage={page}/>
            <Pagination pageCount={pageCount} changePage={changePage}/>
          </div>
        </div>  
      </div>
      <MobileNavbar visibility={true}/>
    </>
  )
}

export default ProductsPage