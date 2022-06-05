import React from "react"
import Head from "./Head"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

// import Search from "./Search"
// import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <SearchBar CartItem={CartItem} />
      <NavBar />
    </>
  )
}

export default Header