import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksTable from "./components/BooksTable";
import LandingPage from "./components/LandingPage";

const App = () => {
  const signedIn = false;
  return (
    <>
      <Header />
      <main>
        <Container className="d-flex align-items-center">
          {signedIn ? <BooksTable /> : <LandingPage />}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
