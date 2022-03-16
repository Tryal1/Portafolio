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
        <img onClick={False} src="barras.svg" alt="barra"/>
        <nav className={styles.navMobile}>
          <div className={styles.enlaces}>
            <ul>
              <li><a href='#about'>About Me</a></li>
              <li><a href='#skill'>Skills</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
        </div>
    )
    }
    return(
        <div className={styles.mobile}>
        <img src="barras.svg" onClick={True} alt="barra"/>
        </div>
    ) 
    

}

export default BarraNav