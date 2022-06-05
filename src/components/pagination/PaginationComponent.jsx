import React from 'react';
import './style.css';
const Pagination = ({pageCount,changePage}) => {
  return (
    <div className="container pages">
      {
        [...Array(pageCount).keys()].map(value => {
            return (
              <button 
                onClick={() => changePage(value+1)}
                key={value} 
                className="paginationBttns chip"
              >
                {value+1}
              </button>
            )
        })
      }
    
    </div>
    // <>
    //   <ReactPaginate
    //     previousLabel={"<"}
    //     nextLabel={">"}
    //     pageCount={pageCount}
    //     onPageChange={changePage}
    //     containerClassName={"paginationBttns"}
    //     previousLinkClassName={"previousBttn"}
    //     nextLinkClassName={"nextBttn"}
    //     disabledClassName={"paginationDisabled"}
    //     activeClassName={"paginationActive"}
    //   />
      
    // </>
  )
}

export default Pagination