import React from "react";

const BookList = ({
  isLoading,
  books,
  isLoggedIn,
  dispatch,
  DeleteBook,
  getBookId,
}) => {
  const bookList =
    books && books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                className="btn btn-outline-primary"
                type="button"
                disabled={!isLoggedIn}
                onClick={() => getBookId(item.id)}
              >
                Read
              </button>
              <button
                className="btn btn-outline-danger"
                type="button"
                disabled={!isLoggedIn}
                onClick={() => dispatch(DeleteBook(item.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "there is no books available";
  return (
    <div>
      <h2>Book List</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul className="list-group inside-the-col-left-one">{bookList}</ul>
      )}
    </div>
  );
};

export default BookList;
