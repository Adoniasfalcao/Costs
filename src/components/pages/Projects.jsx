import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
import Loading from "../layout/Loading"
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCards from "../project/ProjectCards"
import styles from "./Pages style/Projects.module.css"


function Projects () {
    
    const [projects,setProjects] = useState([])
    const [removeLoading,setRemoveLoading] = useState(false)
    const [projectMessage,setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message

    } 

    useEffect( () => {
        //Loading timer
        setTimeout(() => {

            fetch('http://localhost:5000/projects',{
            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }).then( resp => resp.json()
        
        ).then( data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch( err => console.log(err))

        },500)

    },[])


    function removeProject (id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
        .then( (resp) => resp.json)
        .then( () => {
            setProjects(projects.filter( (project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch( (err) => console.log(err))
    }


    return(
        <div className={styles.project_container}>
            
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/new-project" text="Novo projeto"/>
            </div>
            
            {message && (
                <Message message={message} type="sucess"/>
            )}
            {projectMessage && (<Message message={projectMessage} type="sucess"/>)}

            <Container customClass="start">

                {projects.length > 0 &&
                projects.map((project) => (
                    <ProjectCards
                    name={
                        project.project_name.length > 30
                        ? project.project_name.substring(0, 15) + '...'
                        : project.project_name
                    }
                    key={project.id}
                    id={project.id}
                    budget={project.project_budget}
                    category={project.category.name}
                    handleRemove={removeProject}
                    />
                ))
                }
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <h3>Não há projetos criados</h3>
                )}
                    
            </Container>

        </div>  

    )
} 

export default Projects