import styles from './Pages style/Project.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ProjectEdit from '../project/ProjectEdit'

function Project () {

    const { id } = useParams()
    const [project,setProject] = useState([])

    function editPost (project) {

    }

    useEffect( () => {

        fetch(`http://localhost:5000/project/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        }
        )
        .then( resp => resp.json() )
        .then( data => setProject(data) )
        .catch( err => console.log(err) )

    },[])


    return(
        <div className={styles.edit_project_container}>
            <h1>Editar projeto</h1>
            <ProjectEdit btnText={"Editar projeto"} handleSubmit={editPost}/>

        </div>
    )

}

export default Project