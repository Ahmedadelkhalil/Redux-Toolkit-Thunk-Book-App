import { React, Fragment } from "react";

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {info ? (
        <>
          <p className="data-info">
            Name : <span className="book-name">{info.title}</span>
          </p>
          <p className="data-info">
            Price : <span className="book-price">{info.price} $</span>
          </p>
          <p className="data-info">
            UserName : <span className="book-author">{info.userName}</span>
          </p>
          <p className="data-info">
            Description : <span className="book-des">{info.description}</span>
          </p>
        </>
      ) : (
        <div className="alert alert-secondary" role="alert">
          there is no book selected yet, please select .
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
