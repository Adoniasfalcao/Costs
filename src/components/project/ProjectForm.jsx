import { useEffect, useState } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm ( {btnText,handleSubmit,projectData} ) {

    const[categories,setCategories] = useState([])
    const[project,setProject] = useState(projectData || {})


    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                },

            }).then((resp) => resp.json()).then((data) => setCategories(data)).catch((err) => console.log(err))

        }, [])
    
    
    const submit = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    function handleChange(event) {
        setProject( {...project, [event.target.name]: event.target.value} )
        console.log(project)
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input name="project_name" type="text" placeholder="Insira o nome do projeto" text="Nome do projeto"handleOnChange={handleChange} />
            <Input name="project_budget" type="number"placeholder="Insira o orçamento" text="Orçamento" handleOnChange={handleChange}/>
            <Select text="Selecione a categoria" name="select_category" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm