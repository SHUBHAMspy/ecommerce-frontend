import React from 'react'
import Banner from '../components/Banner/Banner'
import Category from '../components/category/Category'
import BlogsSection from '../section/blogs/BlogsSection'
import ProductsSection from '../section/productsSection/ProductsSection'
import Services from '../section/servicesSection/Services'


const Home = () => {
  return (
    <>
      
      <Banner/>
      <Category/>
      <ProductsSection/>
      <Services/>
      <BlogsSection/>
      
    </>
  )
}

export default Home