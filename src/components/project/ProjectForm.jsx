import { useEffect, useState } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm () {

    const[categories,setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                },

            }).then((resp) => resp.json()).then((data) => setCategories(data)).catch((err) => console.log(err))

        }, [])
    

    return(
        <form className={styles.form}>
            <Input name="project_name" type="text" placeholder="Insira o nome do projeto" text="Nome do projeto"/>
            <Input name="project_budget" type="number"placeholder="Insira o orçamento" text="Orçamento"/>
            <Select text="Selecione a categoria" name="select_category" options={categories}/>
            <SubmitButton text="Criar" />
        </form>
    )
}

export default ProjectForm