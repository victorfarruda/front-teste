import Message from "../layout/Message";
import {useLocation} from "react-router-dom";

import styles from './Projects.module.css'
import Container from "../layout/Container";
import {useEffect, useState} from "react";
import BookCard from "../book/BookCard";
import BookPagination from "../book/BookPagination";

function Projects() {

    const [books, setBooks] = useState([]);
    const [links, setLinks] = useState({});
    const [removeLoading, setRemoveLoading] = useState(true);


    const getPage = (param = '/book') => {
        setTimeout(()=>
        fetch(`http://localhost${param}`,{
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setBooks(data.data)
                setLinks(data.links)
                setRemoveLoading(true)
            })
            .catch((err) => {console.log(err)})
        ,300)
    }
    useEffect(() => {
        getPage('/book')
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
                <BookPagination links={links} getPage={getPage}/>
            </div>
        </>
    );
}

export default Projects;
