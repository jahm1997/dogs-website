import React from "react"
import style from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { filterCards, orderCards, getAllDogs } from "../redux/actions"

function Filter() {
  const dispatch = useDispatch()
  const [propiedad, setPropiedad] = React.useState("")
  const [valor, setValor] = React.useState("")

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
  }

  const handleFilter = (evento) => {
    const newPropiedad = evento.target.value
    setPropiedad(newPropiedad)
    if (valor) {
      dispatch(filterCards(valor, newPropiedad))
    }
  }

  const handleChange = (e) => {
    const newValor = e.target.value
    setValor(newValor)
    if (propiedad) {
      dispatch(filterCards(newValor, propiedad))
    }
  }

  const limpiar = () => {
    dispatch(getAllDogs())
    setValor("")
    setPropiedad("")
  }

  return (
    <div className={style.filterContainer}>
      <div className={style.filterGroup}>
        <select className={style.selectInput} onChange={handleOrder} defaultValue="default">
          <option value="default" disabled>Sort By</option>
          <option value="ascendente">A to Z</option>
          <option value="descendente">Z to A</option>
          <option value="maxpeso">Heaviest First</option>
          <option value="minpeso">Lightest First</option>
        </select>
      </div>

      <div className={style.searchGroup}>
        <select className={style.selectInput} onChange={handleFilter} value={propiedad}>
          <option value="" disabled>Search By...</option>
          <option value="name">Breed Name</option>
          <option value="weight">Weight</option>
          <option value="height">Height</option>
          <option value="life_span">Life Span</option>
          <option value="temperament">Temperament</option>
        </select>

        <div className={style.inputWrapper}>
            <input 
                className={style.textInput} 
                type="text" 
                placeholder="Type here..." 
                onChange={handleChange} 
                value={valor}
            />
        </div>
        
        <button className={style.resetButton} onClick={limpiar}>
            🔄 Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
