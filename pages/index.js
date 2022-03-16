import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import BarraNav from './barraNav'
import Slider from './slider'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas Carreño</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav} >
          <Link href='/'>Thomas</Link>
          <div className={styles.enlaces}>
            <ul>
              <li><Link href='#about'>About Me</Link></li>
              <li><Link href='#skill'>Skills</Link></li>
              <li><Link href='#portfolio'>Portfolio</Link></li>
              <li><Link href='#contact'>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    <BarraNav/>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Hi I&apos;M <br/> Thomas Carreño</h1>
          <img src='mifoto.png'/>
        </div>

        <section className={styles.about} id="about" >
            <h2>About Me</h2>
              <div className={styles.contenidoAbout}>
                  <p className="">
                  Soy estudiante de programacion en la UTN, tambien me auto
                  capacito adquierndo conocimientos de nuevos lenguajes,tengo experiencia
                  en el desarrollo de aplicaciones web en equipo y de forma individual, busco desarrollar
                  mis habilidades profesionalmente, soy una persona perseverante y analitico
                  que me gustan los desafios
                  </p>
              </div>
              <div className={styles.btnCv}>
                      <a href="Thomas-Carreño.pdf" download className="">
                          DOWNLOAD CV<i className=""></i>
                      </a>
              </div>
        </section>

        <section id='skill'>
          <h2>Skills</h2>
          <div className={styles.skillContainer}>
            <div>
              <h3>Frontend</h3>
              <div className={styles.skillImg}><img src='html.png'/><p>HTML</p></div>
              <div className={styles.skillImg}><img src='css.png'/><p>CSS</p></div>
              <div className={styles.skillImg}><img src='js.png'/><p>JavaScript</p></div>
              <div className={styles.skillImg}><img src='react.png'/><p>React</p></div>
              <div className={styles.skillImg}><img src='redux.png'/><p>Redux</p></div>
            </div>
            <div>
              <h3>Backend</h3>
              <div className={styles.skillImg}><img src='php.png'/><p>PHP</p></div>
            </div>
            <div>
            <h3>Database</h3>
              <div className={styles.skillImg}><img src='mysql.png'/><p>MySql</p></div>
            </div>
          </div>
        </section>

        <section id='portfolio'>
          <h2>Portfolio</h2>
          <Slider/>
        </section>

        <section id='contact'>
          <h2>Contact</h2>
          <div className={styles.contact}>
            <a href='https://www.linkedin.com/in/thomas-carre%C3%B1o-b73107160/'><div><img src='linkedin.jpg'/><p>Thomas Carreño</p></div></a>
            <a><div><img src='wpp.png'/> <p>+54 9 11 5911 1677</p></div></a>
            <a href='mailto:thomascarreno02@gmail.com'><div><img src='email.jpg'/> <p>thomascarreno02@gmail.com</p></div></a>
            <a href='https://github.com/Tryal1'><div><img src='github.jpg'/> <p>Thomas Carreño</p></div></a>
          </div>
        </section>
      </main>
    </div>
  )
}
