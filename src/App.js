import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";


function App() {
  return (
      <Router>
          <ul>
              <Link to="/">Home</Link>
              <Link to="/company">Company</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/newproject">NewProject</Link>
          </ul>
          <Container customClass={'min-height'}>
              <Routes>
                  <Route element={<Home />} path="/" />
                  <Route element={<Company />} path="/company" />
                  <Route element={<Contact />} path="/contact" />
                  <Route element={<NewProject />} path="/newproject" />
              </Routes>
          </Container>
          <p>Footer</p>
      </Router>
  );
}

export default App;
