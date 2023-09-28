import styles from './Pages style/Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../services/ServiceForm'
import ServiceCard from '../services/ServiceCard'
import Message from '../layout/Message'


function Project () {

    //Variáveis que se associam ao projeto
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


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
            .then( (data) => {
                setProject(data)
                setServices(data.services)
            } )
            .catch( err => console.log(err) )

        },1000)

    }, [id])


    //Editar projetos
    function editPost (project) {
        
        setMessage('') 

        if (project.project_budget < project.costs) {
            setMessage('O orçamento não pode ser menor que os custos do projeto!')
            setType('error')
            return false
        }


        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)

        })
        .then( resp => resp.json() )
        .then( (data) => {

            setProject(data) 
            setShowProjectForm(false)
            setMessage('Projeto atualizado com sucesso!')
            setType('sucess')

        })
        .catch( err => console.log(err) )
        
    }


    function formatedNumber (num) {
         num = num.replace(/[.,$]/g,'')
         num = num.replace(/(\S)(\S)$/,'')
        return num

    }

    //Criação de serviço
    function createService (project) {

        setMessage('')
        //Último serviço
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)  

        const formatedBudget = formatedNumber(project.project_budget)

        //Validação de custo máximo
        if (newCost > parseFloat(formatedBudget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }

        // Adicionar custos ao projeto
        project.cost = newCost

        //Atualizar projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers : {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(project)

        })
        .then( (resp) => resp.json() )
        .then( (data) => {
            //Exibir serviços
            setMessage('Serviço criado!')
            setType('sucess')
            setShowServiceForm(false)
        })

    }

    //Remover serviços
    function removeService (id,cost) {

    }


    //Mostrar formulário de edição
    function toggleProjectForm () {
        setShowProjectForm(!showProjectForm)
    }


    //Mostrar formulário de serviços
    function toggleServiceForm () {
        setShowServiceForm(!showServiceForm)
    }
    

    return(
        <>
            {project.project_name ?
             (
                <div className={styles.project_details}>
                    {/* Edição do projeto*/}
                    <Container customClass="column">
                        {message && <Message type={type} message={message}/>}

                        <div className={styles.details_container}>

                            <h1>Nome: {project.project_name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>

                            {!showProjectForm ?
                            (
                                <div className={styles.project_info}>
                                    <p> <span>Categoria:</span> {project.category.name} </p>
                                    <p> <span>Total de orçamento:</span> R{project.project_budget} </p>
                                    <p> <span>Total utilizado:</span> R${project.cost} </p>
                                </div>
                            ) :
                            (
                                <div className={styles.project_info}>
                                    <p>Editar projeto</p>
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} key={project.id}/>
                                </div>
                            )}

                        </div>

                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço</h2>

                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>

                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm handleSubmit={createService} btnText='Adicionar serviço' projectData={project}/>
                                )}
                            </div>

                        </div>

                        <h2>Serviços</h2>

                        <Container customClass='start'>
                            {services.length > 0 &&
                            services.map( (service) => (
                                <ServiceCard id={service.id} name={service.name} cost={service.cost} description={service.description} key={service.id} handleRemove={removeService} />
                            ))}
                        </Container>

                    </Container>
                </div>

            ) :
            ( <Loading /> )}
        </>
    )

}

export default Project