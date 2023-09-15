import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
    return (
        <>
            <Navbar id='navbar' variant="light">
                <Container>
                    <img src=''/>
                    <Navbar.Brand>Lesbian Vibes</Navbar.Brand>
                    <Nav className="me-auto" id='navbar-text'>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default Navigation