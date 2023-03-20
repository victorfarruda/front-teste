import {Pagination} from "react-bootstrap";


function BookPagination({links, getPage}) {



    const goToNextPage = (e) => {
        e.preventDefault();
        getPage(links.next)
    }
    const goToFirstPage = (e) => {
        e.preventDefault();
        getPage(links.first)
    }
    const goToPrevPage = (e) => {
        e.preventDefault();
        getPage(links.prev)
    }
    const goToLastPage = (e) => {
        e.preventDefault();
        getPage(links.last)
        console.log(links.last)
    }
  return (
    <Pagination>
      <Pagination.First onClick={goToFirstPage} />
      <Pagination.Prev onClick={goToPrevPage} />

      <Pagination.Item active>{links.page}</Pagination.Item>

      <Pagination.Next onClick={goToNextPage} />
      <Pagination.Last onClick={goToLastPage} />
    </Pagination>
  );
}

export default BookPagination;