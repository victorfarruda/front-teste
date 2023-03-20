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
    }
  return (
    <Pagination>
      <Pagination.First href={links.first} onClick={goToFirstPage} />
      <Pagination.Prev href={links.prev} onClick={goToPrevPage} />

      <Pagination.Item active>{links.page}</Pagination.Item>

      <Pagination.Next href={links.next} onClick={goToNextPage} />
      <Pagination.Last href={links.last} onClick={goToLastPage} />
    </Pagination>
  );
}

export default BookPagination;