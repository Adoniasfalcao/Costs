import styles from './Pages style/Project.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Project () {

    const { id } = useParams()
    const [project,setProject] = useState([])



    return(
        <div>
            {project.name}
        </div>
    )

}

export default Project