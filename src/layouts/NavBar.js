
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBarV1 = () => {

    return (
        <>
            <header>
                <Navbar fixed="absolute" className='navBg nav-links' variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>Inicio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav >
                                <Nav.Link as={Link} to='/productos' >Productos</Nav.Link>
                                <Nav.Link as={Link} to='/' >Venta</Nav.Link>
                                <Nav.Link as={Link} to='/buscador' >Buscador</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet></Outlet>
        </>
    );
}

export default NavBarV1;