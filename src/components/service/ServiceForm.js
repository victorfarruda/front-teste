import styles from './ServiceForm.module.css'
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import {useState} from "react";

function ServiceForm({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})

    const submit = (e) => {
        e.preventDefault();
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    const handleChange = (e) => {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input type="text" name="name" text="Nome do serviço"
                   placeholder="Insira o nome do serviço" handleOnChange={handleChange}/>
            <Input type="number" name="cost" text="Custo do serviço"
                   placeholder="Insira o valor total" handleOnChange={handleChange}/>
            <Input type="text" name="description" text="Descrição do serviço"
                   placeholder="Descreva o serviço" handleOnChange={handleChange}/>
            <SubmitButton type="submit" text={btnText} />
        </form>
    );
}

export default ServiceForm;
