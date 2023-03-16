import styles from './ProjectForm.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import {useEffect, useState} from "react";

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])
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

    return (
        <form className={styles.form}>
            <Input type="text" name="projeto" text="Projeto" placeholder="Insira o nome do projeto" />
            <Input type="number" name="budget" text="Orçamento" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a Categoria" options={categories} />
            <SubmitButton type="submit" text={btnText} value="Criar Projeto" options={categories}/>
        </form>
    )
}

export default ProjectForm;