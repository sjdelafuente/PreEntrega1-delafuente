import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function HeaderNavbar() {
    return (
        <Navbar bg="light" variant="light" className="border-bottom">
            <Container className="justify-content-around">
                <Link to="/">
                    <Navbar.Brand>
                        <img src="../img/Logo.png" className="align-top" width="150" height="70" />
                    </Navbar.Brand>
                </Link>

                <Nav className='flex-grow-1 justify-content-center align-items-center'>
                    <Link className="me-5 fw-bold fs-5" to="/" style={{ color: '#181B23', textDecoration: 'none' }}>Home</Link>
                    <NavDropdown className="me-5 fw-bold fs-5" title="Categorías" style={{ color: '#181B23' }}>
                        <NavDropdown.Item><Link to="/products/remeras">Remeras</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/">Accesorios</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav.Link>
                    <CartWidget />
                </Nav.Link>

            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;