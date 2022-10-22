
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const NavBarV1 = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/inicio'>Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/productos' >Productos</Nav.Link>
              <Nav.Link as={Link} to='/encontranos'>Encontranos</Nav.Link>
              <Nav.Link as={Link} to='/sobrenosotros'>Sobre nosotros</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/contactos'>Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default NavBarV1;