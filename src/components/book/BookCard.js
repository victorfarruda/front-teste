import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

import styles from './BookCard.module.css'

function BookCard({book, image}) {
  return (
    <Card style={{ width: '14rem', margin: '0.13em' }}>
      <Card.Img variant="top" src={"http://localhost/images/"+image.filename} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
            {book.author}
        </Card.Text>
        <div className={styles.actions}>
          <Link to="/newproject">
            <Button variant="dark">Add ao carrinho</Button>
          </Link>
          <Link to="/newproject">
            <Button variant="light">Comprar</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BookCard;