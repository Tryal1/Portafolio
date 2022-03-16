import { useState } from "react"
import styles from '../styles/Home.module.css'


const Slider = () =>{
    const [page , setPage] = useState(1)

    const next = () =>{
        if(page<3){
            setPage(page+1)
        }else if(page == 3){
            setPage(1)
        }
    }
    const prev = () =>{
        if(page == 1){
            setPage(3)
        }else if(page>1){
            setPage(page-1)
        } 
    }

    if(page == 2){
        return(
            <div className={styles.contenedorSlider}>
            <div className={styles.slider}>
                <div className={styles.prev}><img onClick={prev} className={styles.flechas} src="flechai.png"/></div>
                <a href="https://github.com/Tryal1/Batalla-Naval"> <img className={styles.imgPorfolio} src="batalla-naval.png"/></a>
                <div>
                <h2>Batta Naval</h2>
                    <p>
                    Es un programa realizado en C++ que representa la batalla naval donde se
                    puede jugar entre personas o contra una IA, cuenta además con la opción
                    de selección de flota y la creación de islas
                    </p>
                </div>
                <div className={styles.next}><img onClick={next} className={styles.flechas} src="flechad.png"/></div>
            </div>
            </div>
        )
    }

    if(page == 3){
        return(
            <div className={styles.contenedorSlider}>
            <div className={styles.slider}>
                <div className={styles.prev}><img onClick={prev} className={styles.flechas} src="flechai.png"/></div>
                <a href="https://github.com/Tryal1/Banco"> <img className={styles.imgPorfolio} src="banco.jpg"/></a>
                <div>
                <h2>Banco/Cajero</h2>
                    <p>
                    Proyecto realizado en C++ que simula un banco/cajero te permite crear
                    cuentas hacer trasferencias, depositar, retirar, tambien podes ver tus
                    movimientos y dar de baja la cuenta
                    </p>
                </div>
                <div className={styles.next}><img onClick={next} className={styles.flechas} src="flechad.png"/></div>
            </div>
            </div>
        )
    }

    return(
        <div className={styles.contenedorSlider}>
            <div className={styles.slider}>
                <div className={styles.prev}><img onClick={prev} className={styles.flechas} src="flechai.png"/></div>
                <a href="https://poke-api-envt12tkn-tryal1.vercel.app/"> <img className={styles.imgPorfolio} src="pokeApi.png"/></a>
                <div>
                <h2>PokeApi</h2>
                    <p>
                        App sobre pokemones donde puedes buscar, filtrar y ordenar
                        los pokemones usando la informacion de una API
                    </p>
                </div>
                <div className={styles.next}><img onClick={next} className={styles.flechas} src="flechad.png"/></div>
            </div>
        </div>
    )
}

export default Slider