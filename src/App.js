import { React, Fragment } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import AddForm from "./Components/AddForm";
import BookContainer from "./Components/Books/BookContainer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
};
export default App;
