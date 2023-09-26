import styles from './Pages style/Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'


function Project () {

    //Definindo variáveis para fazer associação ao projeto
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)


    //Pegando projetos do JSON
    useEffect( () => {

        setTimeout( () => {

            fetch(`http://localhost:5000/projects/${id}` , {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                }
            })
            .then( resp => resp.json() )
            .then( (data) => {setProject(data)} )
            .catch( err => console.log(err) )

        },1000)

    }, [id])


    //Mostrar formulário de edição
    function toggleProjectForm () {
        setShowProjectForm(!showProjectForm)
    }
    

    return(
        <>
            {project.project_name ?
             (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.project_name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>

                            {!showProjectForm ?
                            (
                                <div className={styles.project_info}>
                                    <p> 
                                        <span>Categoria:</span> {project.category.name}
                                    </p>

                                    <p>
                                        <span>Total de orçamento:</span> ${project.budget}
                                    </p>

                                    <p>
                                        <span>Total utilizado:</span> ${project.cost}
                                    </p>
                                    
                                </div>

                            ) :
                            (
                                <div className={styles.project_info}>
                                    <p>Detalhes do projeto</p>
                                </div>
                            )}

                        </div>
                    </Container>
                </div>

            ) :
            ( <Loading /> )}
        </>
    )

}

export default Project