import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/Logo.png';
import CartWidget from '../CartWidget/CartWidget';

function HeaderNavbar() {
    return (
        <Navbar bg="light" variant="light" className="border-bottom">
            <Container className="justify-content-around">
                <Navbar.Brand href="#home">
                    <img src={Logo} className="align-top" width="150" height="70" />
                </Navbar.Brand>

                <Nav className='flex-grow-1 justify-content-center align-items-center'>
                    <Nav.Link className="me-5 fw-bold fs-5" href="#home" style={{ color: '#181B23' }}>Home</Nav.Link>
                    <Nav.Link className="me-5 fw-bold fs-5" href="#features" style={{ color: '#181B23' }}>Nuestros Productos</Nav.Link>
                    <NavDropdown className="me-5 fw-bold fs-5" title="Categorías" style={{ color: '#181B23' }}>
                        <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
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