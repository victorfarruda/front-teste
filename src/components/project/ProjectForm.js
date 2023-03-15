import styles from './ProjectForm.module.css'
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" name="projeto" text="Projeto" placeholder="Insira o nome do projeto" />
            <Input type="number" name="budget" text="Orçamento" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a Categoria" />
            <SubmitButton type="submit" text={btnText} value="Criar Projeto"/>
        </form>
    )
}

export default ProjectForm;