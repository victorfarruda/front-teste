import Message from "../layout/Message";
import {useLocation} from "react-router-dom";

import styles from './Projects.module.css'
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import {useEffect, useState} from "react";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [projectMessage, setprojectMessage] = useState('');
    const [removeLoading, setremoveLoading] = useState(true);

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(()=>
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setremoveLoading(false)
            })
            .catch((err) => {console.log(err)})
        ,300)
    },[])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE', headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp)=> resp.json())
            .then( data => {
                setProjects((projects.filter((project) => project.id !== id)))
                setprojectMessage("Projeto Removido com Sucesso!")
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            <div className={styles.content}>
                <div>
                    {message && <Message type="success" msg={message} /> }
                    {projectMessage && <Message type="success" msg={projectMessage} /> }
                </div>

                <Container customClass="start">
                    {projects.length > 0 && projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category}
                            handleRemove={removeProject}
                        />
                    ))}
                    {removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 && <p>Não há projetos cadastrados</p>}
                </Container>
            </div>
        </>
    );
}

export default Projects;
