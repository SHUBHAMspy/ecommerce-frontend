import React, { useState } from 'react';
import './style.css';
const Pagination = ({pageCount,changePage}) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  return (
    <div className="pages">
      <button 
        className={`paginationBttns chip ${currentPage === 1 ? 'disable': ''}`} 
        onClick={() => {
          changePage(currentPage - 1);
          setCurrentPage(currentPage - 1);
        }}
      > &lt; </button>
      {
        [...Array(pageCount).keys()].map(value => {
            const active = (value + 1 === currentPage) ? 'activePage': ''
            return (
              <button 
                onClick={() => {
                  changePage(value+1)
                  setCurrentPage(value + 1);
                }}
                key={value} 
                className={`paginationBttns chip ${active}`}
              >
                {value+1}
              </button>
            )
        })
      }

      <button 
        className={`paginationBttns chip ${currentPage === pageCount ? 'disable': ''}`} 
        onClick={() => {
        changePage(currentPage + 1);
        setCurrentPage(currentPage + 1);
        }}
      
      >
        &gt; </button>
    
    </div>
    
  )
}

export default Pagination