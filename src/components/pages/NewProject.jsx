import styles from './Pages style/NewProjects.module.css'
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm'

function NewProject () {

    const history = useNavigate()

    function createPost(project) {
        //Initialize costs and services
        project.costs = 0
        project.services = []

        fetch("http:/localhost:5000/projects",{
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                body: JSON.stringify(project)
            }

        }).then((resp) => resp.json() )
        .then((data) => console.log(data)
            //Redirect
            ).catch((err) => console.log(err))

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e adicione serviços</p> 
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject