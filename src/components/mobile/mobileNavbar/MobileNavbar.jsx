import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import SideBar from "../../sidebar/SideBar";
import MobileMenu from '../mobileMenu/MobileMenu';
import './style.css';

const MobileNavbar = ({visibility}) => {
  const [open, setOpen] = useState(false);
  const [openSidebar,setOpenSidebar] = useState(false);
  const {totalItems} = useCart();
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  
  const closeMenu = (close) => {
    setOpen(close);
  }
  
  const closeSidebar = (close) => {
    setOpenSidebar(close);
  }

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpen(open) : setOpen(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpenSidebar(openSidebar) : setOpenSidebar(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openSidebar])
  
  return (
    <>
      <div className="mobile-bottom-navigation">

        <button className="action-btn"  onClick={() => setOpen(!open)}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <Link to={credentials? '/cart': '/login'}>
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

        <button className="action-btn" data-mobile-menu-open-btn
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>
      {open && <MobileMenu open={open} setClose={closeMenu}/>}
      {openSidebar && <SideBar openSidebar={openSidebar} sidebarVisible={visibility} closeSidebar={closeSidebar}/>} 
    </>
  )
}

export default MobileNavbar