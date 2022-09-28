import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoggedInOut } from "../Store/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.books);
  return (
    <Fragment>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(LoggedInOut())}
        >
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;