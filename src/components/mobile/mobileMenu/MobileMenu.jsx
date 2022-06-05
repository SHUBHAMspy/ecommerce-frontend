import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuData from './MenuData';
import './style.css';
const MobileMenu = ({setClose}) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  //console.log(openMenu);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const active = openMenu ? "active" : "";
    
  return (
    <>
          <nav className={`mobile-navigation-menu has-scrollbar ${active}`} >

            <div className="menu-top">
              <h2 className="menu-title">Menu</h2>

              <button className="menu-close-btn" 
                onClick={() => {
                  setOpenMenu(!openMenu); 
                  //console.log(openMenu); 
                  setClose(!openMenu)}
                } 
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="mobile-menu-category-list">

              <li className="menu-category">
                <Link to={'/'} className="menu-title">Home</Link>
              </li>

              {
                MenuData.map((menuItem,index) => {
                  const active = index === activeIndex ? "active" : "";
                  return (

                    <li className="menu-category" key={index}>
                      <button className="accordion-menu" onClick={() => handleClick(index)}>
                        <p className="menu-title">{menuItem.title}</p>
                        <div>
                          { activeIndex === index 
                            ? <ion-icon name="remove-outline" className="remove-icon" ></ion-icon>
                            : <ion-icon name="add-outline" className="add-icon"  ></ion-icon>
                          }
                        </div>
                      </button>
                      <ul className={`submenu-category-list ${active}`}>
                        {
                          menuItem.subCategories.map((subCategory,index) => (
                            <li className="submenu-category" key={index}>
                              <Link to={'#'} className="submenu-title">{subCategory.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </li>
                  )
                })
              }

              {/* <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Men's</p>

                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Shirt</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Safety Shoes</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Wallet</a>
                  </li>

                </ul>

              </li>

              <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Women's</p>

                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Dress & Frock</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Makeup Kit</a>
                  </li>

                </ul>

              </li>

              <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Jewelry</p>

                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Couple Rings</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Bracelets</a>
                  </li>

                </ul>

              </li>

              <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Perfume</p>

                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Clothes Perfume</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Deodorant</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Flower Fragrance</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Air Freshener</a>
                  </li>

                </ul>

              </li> */}

              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>

            </ul>

            <div className="menu-bottom">

              <ul className="menu-category-list">

                <li className="menu-category">

                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>

                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                  </button>

                  <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                      <a href="#" className="submenu-title">English</a>
                    </li>

                    <li className="submenu-category">
                      <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>

                    <li className="submenu-category">
                      <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>

                  </ul>

                </li>

                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                  </button>

                  <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">USD &dollar;</a>
                    </li>

                    <li className="submenu-category">
                      <a href="#" className="submenu-title">EUR &euro;</a>
                    </li>
                  </ul>
                </li>

              </ul>

              <ul className="menu-social-container">

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    </>
  )
}

export default MobileMenu