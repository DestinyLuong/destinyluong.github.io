import {Nav, Navbar} from 'react-bootstrap';



//import 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Destiny's Portfolio</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Bio</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}


export default NavBar;
