import styles from './layout styles/Navbar.module.css'
import {Link} from 'react-router-dom'
import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navbar () {
    return(
        <nav>
            <Container>
                <Link to="/"><img src={logo} alt="Costs"/></Link>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/company">Empresa</Link></li>
                    <li><Link to="/contacts">Contatos</Link></li>
                    <li><Link to="/new-project">Novo projeto</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar