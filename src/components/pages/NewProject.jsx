import styles from './Pages style/NewProjects.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject () {
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e adicione serviços</p> 
            <ProjectForm/>
        </div>
    )
}

export default NewProject