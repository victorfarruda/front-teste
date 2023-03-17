import Message from "../layout/Message";
import {useLocation} from "react-router-dom";

import styles from './Projects.module.css'
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects() {

    const location = useLocation();
    console.log(location)
    let message = '';
    if (location.state) {
        message = location.state.message;
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
                </div>

                <Container customClass="start">
                    <p>Projetos...</p>
                </Container>
            </div>
        </>
    );
}

export default Projects;
