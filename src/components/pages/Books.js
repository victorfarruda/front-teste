import Message from "../layout/Message";
import {useLocation} from "react-router-dom";

import styles from './Projects.module.css'
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import {useEffect, useState} from "react";
import BookCard from "../book/BookCard";

function Projects() {

    const [books, setBooks] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>
        fetch('http://localhost/book',{
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setBooks(data.data)
                setRemoveLoading(true)
            })
            .catch((err) => {console.log(err)})
        ,300)
    },[])

    return (
        <>
            <div className={styles.titleContainer}>
                <h2>Livros</h2>
            </div>
            <div className={styles.content}>
                <Container >
                    {books.length > 0 && books.map((book) => (
                        <BookCard book={book} image={book.images.length > 0 ? book.images[0] : 'undefined'}/>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default Projects;
