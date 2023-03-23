import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import styles from './BookCard.module.css'

function BookCard({book, image}) {
  return (
    <Card style={{ width: '10rem', margin: '0.13em' }}>
    <div className={styles.card}>
        <Link to={`/book/${book.id}`}>

          <Card.Img variant="top" src={"http://localhost/images/"+image.filename} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
                <div className={styles.body}>
                    <p><span>Autor: </span>{book.author}</p>
                    <p><span>Preço: </span>R${book.price}</p>
                    <p><span>ISBN: </span>{book.isbn}</p>
                </div>
            </Card.Text>
          </Card.Body>

        </Link>
    </div>
    </Card>
  );
}

export default BookCard;