import { useState } from 'react'
import styles from './styles.module.scss'

export function SearchBox(){

  const [text, setText] = useState("")
  const [item, setItem] = useState("")

  function handleChange(event){
    let t = event.target.value
    setText(t)
  }

  function addItem(event){
    event.preventDefault()
    setItem(text)
  }

  return(
    <div className={styles.content}>
      <div className={styles.contentWrapperSearch}>
        <input className={styles.txtBusca} type="text" id="txtbusca" placeholder="Digite o nome da cidade" onChange={handleChange}/>
        <button className={styles.btSearch} type="submit" onClick={addItem}>
          Buscar
        </button> 
      </div>
      
      <div className={styles.contentItems}>
        <p>
          {item}
        </p>
      </div>

    </div>
    
  )
}