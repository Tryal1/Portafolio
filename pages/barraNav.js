import { useState } from "react"
import styles from '../styles/Home.module.css'

const  BarraNav = ()=>{
    const [estado , setEstado] = useState(false)
    const True = (e)=>{
        e.preventDefault()
        setEstado(true)
    }
    const False = (e)=>{
        e.preventDefault()
        setEstado(false)
    }
    if(estado){
        return(
        <div className={styles.mobile}>
        <img  onClick={False} className={styles.girarBarrasDerecha} src="barras.svg" alt="barra"/>
        <nav className={styles.navMobile}>
          <div className={styles.enlaces}>
            <ul>
              <li><a href='#about'>Sobre Mi</a></li>
              <li><a href='#skill'>Skills</a></li>
              <li><a href='#portfolio'>Portafolio</a></li>
              <li><a href='#contact'>Contacto</a></li>
            </ul>
          </div>
        </nav>
        </div>
    )
    }
    return(
        <div className={styles.mobile}>
        <img className={styles.girarBarrasIzquierda} src="barras.svg" onClick={True} alt="barra"/>
        </div>
    ) 
    

}

export default BarraNav