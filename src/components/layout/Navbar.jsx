import styles from './layout styles/Navbar.module.css'
import {Link} from 'react-router-dom'
import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navbar () {
    return(
        <nav className={styles.navbar}>
                <Link to="/"><img src={logo} alt="Costs" className={styles.Imagem} /></Link>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                    <li className={styles.item}><Link to="/contacts">Contatos</Link></li>
                    
                </ul>
        </nav>
    )
}

export default Navbar