import styles from './Project.module.css'
import NewProject from "./NewProject";
import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import ProjectForm from "../project/ProjectForm";

function Project() {
    const {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => setProject(data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <p>{project.name}</p>
    )
}

export default Project;