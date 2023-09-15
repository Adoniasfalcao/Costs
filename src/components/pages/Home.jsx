import styles from './Pages style/Home.module.css'
import logo from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home () {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Inicie a sua jornada para gerenciar projetos agora!</p>
            <LinkButton to="/projects" text="Criar projeto"/>
            <img src={logo} alt="Costs"/>
        </section>
    )
}

export default Home  