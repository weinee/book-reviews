import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksTable from "./components/BooksTable";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <BooksTable />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
