import styles from './Pages style/Project.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ProjectEdit from '../project/ProjectEdit'

function Project () {

    const { id } = useParams()
    const [project,setProject] = useState([])

    function editPost (project) {

    }

    return(
        <div className={styles.edit_project_container}>
            <h1>Editar projeto</h1>
            <ProjectEdit btnText={"Editar projeto"} handleSubmit={editPost}/>

        </div>
    )

}

export default Project