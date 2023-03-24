import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BookPageCarousel from "./BookPageCarousel";
import styles from './BookPage.module.css'
import {Badge, ListGroup} from "react-bootstrap";

function BookPage() {
    const {id} = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost/book/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
                .then((data) => {
                    setBook(data)
                    console.log(data)
                })
                .catch(err => console.log(err))
        }, 500)
    }, [id])
    return (
        <>
        <div className={styles.main}>
            <div>
                <BookPageCarousel book={book}/>
            </div>
            <div>TESTE</div>
        </div>
        <div>
            <ListGroup as="ul">
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Título: </span>
                    {book.title}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Autor: </span>
                    {book.author}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Ano de Edição: </span>
                    {book.edition_year}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Local de Edição: </span>
                    {book.edition_location}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">ISBN: </span>
                    {book.isbn}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Número de Páginas: </span>
                    {book.pages_number}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Editora: </span>
                    {book.publishing_company}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Volume: </span>
                    {book.volume}
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <span className="fw-bold">Preço: </span>
                    {book.price}
                </div>
              </ListGroup.Item>
            </ListGroup>
        </div>
    </>
    );
}

export default BookPage;
