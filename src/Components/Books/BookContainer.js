import React, { Fragment, useEffect, useState } from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, DeleteBook } from "../../Store/BookSlice";

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col mb-3 rounded">
          <BookList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            DeleteBook={DeleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line mb-3 rounded">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
