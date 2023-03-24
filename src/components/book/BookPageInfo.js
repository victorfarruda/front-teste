import {Carousel, ListGroup} from "react-bootstrap";

function BookPageInfo({book}) {
    return (
    <div>
            <ListGroup style={{ height: '23rem', width: '60rem', margin: '0.13em' }} as="ul">
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
            </ListGroup>
        </div>
    );
}

export default BookPageInfo;
