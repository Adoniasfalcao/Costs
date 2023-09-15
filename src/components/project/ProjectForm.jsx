import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm () {
    return(
        <form className={styles.form}>
            <Input name="project_name" type="text" placeholder="Insira o nome do projeto" text="Nome do projeto"/>
            <Input name="project_budget" type="number"placeholder="Insira o orçamento" text="Orçamento"/>
            <Select text="Selecione a categoria" name="select_category"/>
            <SubmitButton />
        </form>
    )
}

export default ProjectForm