import {Carousel} from "react-bootstrap";

function BookPageCarousel({book}) {
    return (
    <div>
        <Carousel style={{ height: '15rem', width: '15rem', margin: '0.13em' }}>{book && book.images.map(img =>
          <Carousel.Item interval={5000}>
            <img
              className="w-100 align-items-center"
              src={"http://localhost/images/"+img.filename}
              alt="First slide"
            />
          </Carousel.Item>)}
        </Carousel>
    </div>
    );
}

export default BookPageCarousel;
