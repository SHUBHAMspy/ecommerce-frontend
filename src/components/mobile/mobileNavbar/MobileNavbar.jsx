import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import MobileMenu from '../mobileMenu/MobileMenu';
import './style.css';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  // const [openSidebar,setOpenSidebar] = useState(false);
  const {totalItems} = useCart();
  
  useEffect(() => {
    const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
    for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
      mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        //overlay.classList.add('active');
      });
      const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
      }

      mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);

    }
    

    // const handleClick = () => {
    //   mobileMenu.classList.add('active');
    // }
    //return () =>  mobileMenuOpenBtn.addEventListener('click', handleClick);
    
  }, [])
  
  const closeMenu = (close) => {
    setOpen(close);
  }
  // const closeSidebar = (close) => {
  //   setOpenSidebar(close);
  // }

  
  return (
    <>
      <div className="mobile-bottom-navigation">

        <button className="action-btn"  onClick={() => setOpen(!open)}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <Link to={'/cart'}>
          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">{totalItems}</span>
          </button>
        </Link>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn >
          {/* onClick={() => setOpenSidebar(!openSidebar)} */}
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>
      {open && <MobileMenu  setClose={closeMenu}/>}
      {/* {openSidebar && <SideBar openSidebar={openSidebar} closeSidebar={closeSidebar}/>} */}
    </>
  )
}

export default MobileNavbar