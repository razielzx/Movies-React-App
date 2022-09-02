import { Link } from 'react-router-dom';

//Components
import Searcher from './Searcher';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const HeaderNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Discover New Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/list'>List</Link>
            <Link className="nav-link" to='/detail'>Detail</Link>
          </Nav>

          <Searcher/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;