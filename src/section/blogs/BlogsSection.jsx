import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import BlogsData from './BlogsData'
import './style.css'

const BlogsSection = () => {
  
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          
            {
              BlogsData.map((blog,index) => (
                <div className="blog-card" key={blog.id}>
                  <Link to={'/'}>
                    <img src={blog.img} alt={blog.title} width="300" className="blog-banner"/>
                  </Link>
                  <div className="blog-content">
                    <Link to={`/category/${blog.category}`} className="blog-category">{blog.category}</Link>
                    <h3>
                      <Link to={'/'} className="blog-title">{blog.title}</Link>
                    </h3>
                    <p className="blog-meta">
                      By <cite>{blog.author}</cite> / <time dateTime="2022-04-06">Apr 06, 2022</time>
                    </p>
                  </div>

                </div>

              ))
            }

        

        </div>

      </div>
      
    </div>
  )
}

export default BlogsSection