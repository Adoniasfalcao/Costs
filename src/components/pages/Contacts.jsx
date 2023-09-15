import {RiContactsBook2Line} from 'react-icons/ri'
import styles from './Pages style/Contacts.module.css'
import coin from '../../img/costs_logo.png'
import LinkButton from '../layout/LinkButton'


function Contacts () {
    
    return(
        <div className={styles.contacts_container}>
            <h1>Contatos</h1>
            <RiContactsBook2Line/>
            <p>Você pode entrar em contato com a Costs pelos seguintes meios de comunicação:</p>

            <nav className={styles.itensNav}>
                <ul className={styles.listNav}>
                   <li className={styles.itemNav}> <img src={coin} alt="Email" /> </li> 
                   <li className={styles.escondido}><LinkButton to="adoniasfalcao036@gmail.com" text="Email"/></li>
                    <li className={styles.itemNav}><img src={coin} alt="Linkedin"/> </li>
                   <li className={styles.escondido}><LinkButton to="https://linkedin.com/in/adonias-falcão010530/" text="Linkedin"/></li>

                </ul>
            </nav>
        </div>     
    )   
}


export default Contacts