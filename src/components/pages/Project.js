import styles from './Project.module.css'
import NewProject from "./NewProject";
import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

function Project() {
    const {id} = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
                .then((data) => setProject(data))
                .catch(err => console.log(err))
        }, 500)
    }, [id])

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    };

    return (<>
        {project.name ? <div className={styles.projectDetails}>
            <Container customClass="column">
                <div className={styles.detailsContainer}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                    {!showProjectForm ? (<div className={styles.projectInfo}>
                        <p><span>Categoria:</span> {project.category.name}</p>
                        <p><span>Total de Orçamento:</span> R${project.budget}</p>
                        <p><span>Total utilizado:</span> R${project.cost}</p>
                    </div>) : (<div className={styles.projectInfo}><p>FORM</p></div>)}
                </div>
            </Container>
        </div> : <Loading/>}
        </>)
}

export default Project;