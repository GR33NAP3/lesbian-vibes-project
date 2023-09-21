import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
    return (
        <>
            <Navbar id='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <img src='./Images/lesbian-vibes.png'/>
                    <Navbar.Brand>Lesbian Vibes</Navbar.Brand>
                    <Nav className="me-auto" id='navbar-text'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                        <Nav.Link href='/matches'>Matches</Nav.Link>
                        <Nav.Link href='/explore'>Explore</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default Navigation