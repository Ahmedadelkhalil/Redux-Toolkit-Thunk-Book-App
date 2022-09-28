import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { insertBook } from "../Store/BookSlice";
import { useSelector } from "react-redux";

const AddForm = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBook(data));
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };
  return (
    <div className="row">
      <div className="col-6-lg offset-3-lg mt-3">
        <h3>Insert Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title :</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price :</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description :</label>
            <textarea
              ref={description}
              className="form-control mb-3"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddForm;
