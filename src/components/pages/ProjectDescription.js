import styles from './Project.module.css'
import ProjectForm from "../project/ProjectForm";

function ProjectDescription({project, showProjectForm, editPost, toggleProjectForm}) {

    return (<>
            <div className={styles.detailsContainer}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                    {!showProjectForm ? (<div className={styles.projectInfo}>
                        <p><span>Categoria:</span> {project.category.name}</p>
                        <p><span>Total de Orçamento:</span> R${project.budget}</p>
                        <p><span>Total utilizado:</span> R${project.cost}</p>
                    </div>) : (<div className={styles.projectInfo}>
                        <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/>
                    </div>)}
                </div>
        </>)
}

export default ProjectDescription;