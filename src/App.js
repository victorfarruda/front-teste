import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";


function App() {
  return (
      <Router>
            <Navbar/>
          <Container customClass={'min-height'}>
              <Routes>
                  <Route element={<Home />} path="/" />
                  <Route element={<Projects />} path="/projects" />
                  <Route element={<Company />} path="/company" />
                  <Route element={<Contact />} path="/contact" />
                  <Route element={<NewProject />} path="/newproject" />
              </Routes>
          </Container>
          <Footer/>
      </Router>
  );
}

export default App;
