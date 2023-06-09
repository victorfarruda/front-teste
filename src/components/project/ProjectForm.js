import styles from './ProjectForm.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import {useEffect, useState} from "react";

function ProjectForm({btnText, handleSubmit, projectData}) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        }).then(async resp => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // console.log(project);
        handleSubmit(project);
    }


    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
        console.log(project)
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input type="text" name="name" text="Projeto" value={project.name ? project.name : ''}
                   placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>
            <Input type="number" name="budget" text="Orçamento" value={project.budget ? project.budget : ''}
                   placeholder="Insira o orçamento total" handleOnChange={handleChange}/>
            <Select name="category_id" text="Selecione a Categoria" value={project.category ? project.category.id : ''}
                    options={categories} handleOnChange={handleCategory}/>
            <SubmitButton type="submit" text={btnText} value="Criar Projeto" options={categories}/>
        </form>
    )
}

export default ProjectForm;