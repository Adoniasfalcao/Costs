import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCards from "../project/ProjectCards"
import styles from "./Pages style/Projects.module.css"


function Projects () {
    
    const [projects,setProjects] = useState([])

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message

    } 

    useEffect( () => {

        fetch('http://localhost:5000/projects',{
            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }).then( resp => resp.json()
        
        ).then( data => {
            console.log(data)
            setProjects(data)
        })
        .catch( err => console.log(err))

    },[])

    return(
        <div className={styles.project_container}>
            
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/new-project" text="Novo projeto"/>
            </div>
            
            {message && (
                <Message message={message} type="sucess"/>
            )}

            <Container customClass="start">
                { projects.length > 0 && 
                    projects.map((project) => (<ProjectCards name={project.name}/>))}
            </Container>

        </div>  

    )
} 

export default Projects