import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../gqloperations/queries';
import { BACKEND_URL } from '../../utils/helpers';
import "./style.css";

const Accordian = ({count}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const {loading,error,data} = useQuery(getCategories,{
    variables:{
      "pagination": {
        "limit":50
      }
    }
  });
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  if(loading) return <h5>Loading ...</h5>
  console.log(data);
  return (
    <ul className="sidebar-menu-category-list">
      {
        data.categories.data.map((category,index) => {
          const active = index === activeIndex ? "active" : "";
          
          if(category.attributes.parent.data === null){
            
            return (
  
              <li className="sidebar-menu-category" key={index}>
                <button className="sidebar-accordion-menu" onClick={() => handleClick(index)} data-accordion-btn>
                  <div className="menu-title-flex">
                    <img src={BACKEND_URL + category.attributes.image.data.attributes.url} alt={category.name } className="menu-title-img" width="20" height="20"/>
                    <p className="menu-title">{category.attributes.name}</p>
                  </div>
  
                  <div>
                    { activeIndex === index 
                      ? <ion-icon name="remove-outline" className="remove-icon" ></ion-icon>
                      : <ion-icon name="add-outline" className="add-icon"  ></ion-icon>
                    }
                  </div>
                </button>
                <ul className={`sidebar-submenu-category-list ${active}`} data-accordion>
                  {
                    category.attributes.categories.data.map(({attributes,id}) => (
                      
                      <li className="sidebar-submenu-category" key={id}>
                        <Link to={`/category/${id}`} className="sidebar-submenu-title">
                          <p className="product-name">{attributes.name }</p>
                          <data value={attributes.products.data.length} className="stock" title="Available Stock">{attributes.products.data.length}</data>
                        </Link>
                      </li>  
                    ))
                  }
  
                </ul>
              </li>
            )
            
          }
        })
      }



      
    </ul>
  )
}

export default Accordian