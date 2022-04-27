import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksTable from "./components/BooksTable";
import LandingPage from "./components/LandingPage";
import Auth from "./components/Auth/Auth";

const App = () => {
  const signedIn = false;
  return (
    <div id="wrapper">
      <Header />
      <main>
        <Container className="d-flex align-items-center">
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="sign-up" element={<LandingPage />} exact />
          </Routes>

          {/*{signedIn ? <BooksTable /> : <LandingPage />}*/}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
