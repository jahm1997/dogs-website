import React from "react";
import style from "./Pagination.module.css"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate, delante, atras, currentPage }) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }
  
  return (
    <nav className={style.nav}>
      <ul className={style.paginationList}>
        <li>
          <button className={style.navButton} onClick={() => atras()} disabled={currentPage === 1}>
             &laquo; Prev
          </button> 
        </li>

        {numeroPaginas.map(number => (
          <li key={number}>
             <button 
                className={`${style.pageButton} ${currentPage === number ? style.active : ''}`}
                onClick={() => paginate(number)}
             >
                {number}
             </button>
          </li>
        ))}
        
        <li>
          <button className={style.navButton} onClick={() => delante()} disabled={currentPage === numeroPaginas.length}>
            Next &raquo;
          </button>   
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
