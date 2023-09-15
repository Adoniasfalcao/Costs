import styles from './ProjectForm.module.css'
import Input from '../form/Input'

function ProjectForm () {
    return(
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"></input>
            </div>

            <div>
                <input type="number" placeholder="Insira o orçamento"></input>
            </div>

            <div>
                <select name="category_id">
                    <option>Selecione a categoria</option>
                    <option disabled selected></option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar projeto" />
            </div>

        </form>
    )
}

export default ProjectForm