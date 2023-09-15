import styles from './Pages style/Company.module.css'
import logo from '../../img/costs_logo.png'

function Company () {
    return(
        <div className={styles.company_container}>
            <h1>Empresa</h1>
            <img src={logo} alt='Costs'/>
            <p>Somos uma empresa de gerenciamento de projetos altamente especializada e que almeja atingir <span>sucesso</span> no nosso setor.</p>
            <p>Iniciamos nossa jornada no ano de 2023 com o objetivo de facilitar a criação e o planejamento de projetos dos nossos clientes, pensando trouxemos uma <span>solução inovadora 
                </span> e de <span>simples</span> utilização para garantir maior <span>agilidade</span> e <span>eficiência</span> na gerência de projetos</p>
        </div>
    )
}

export default Company 