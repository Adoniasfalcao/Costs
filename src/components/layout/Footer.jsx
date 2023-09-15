import styles from './layout styles/Footer.module.css'
import {FaGithubSquare,FaInstagram,FaLinkedin} from 'react-icons/fa'

function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li className={styles.item}><FaGithubSquare/></li>
                <li className={styles.item}><FaLinkedin/></li>
                <li className={styles.item}><FaInstagram/></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer