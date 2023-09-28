import { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';




function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([
    {
    name: "Desenvolvimento"
  },
  {
    name: "Infraestrutura"
  },
  {
    name: "Planejamento"
  },
  {
    name: "Desing"
  }
]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then( (resp) => resp.json() )
      .then( (data) => {
        setCategories(data);
        console.log(data)
      })
      .catch( (err) => console.log(err) );
  }, []);

  const submit = (event) => {
    
    event.preventDefault();
    
    if (project.project_name && project.project_budget && project.category){ 
      handleSubmit(project);
    }else{
      alert("Complete todas as informações!")
    }
  };

  // Função para formatar o valor como moeda (BRL)
  const formatCurrency = (value) => {
    // Remova todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');
    const newNumericValue = numericValue.replace(/^(\S)(\S)(\S)(\S)(\S)(\S)/g, '$$1.$2$3$4,$5$6')
    
    // Verifique se o valor não está vazio
    if (numericValue === '') {
      return '';
    }
  
    // Converta para um número2dsad
    const floatValue = newNumericValue;
    return floatValue
    
    // Formate apenas se for um número válido
   
  };

  function handleChange(event) {
    const newValue = event.target.value;
    const formattedValue = formatCurrency(newValue);
    setProject({ ...project, project_budget: formattedValue });
  }

  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    });
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        name="project_name"
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        handleOnChange={(event) =>
          setProject({ ...project, project_name: event.target.value })
        }
        value={project.project_name}
      />
      <Input
        name="project_budget"
        type="text"
        placeholder="Insira o orçamento"
        text="Orçamento"
        handleOnChange={handleChange}
        value={project.project_budget}
        
      />
      <Select
        text="Selecione a categoria"
        name="select_category"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
        
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
