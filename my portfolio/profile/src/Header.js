import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#name">PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto">

            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>

            {/* <Nav.Link href="#Resume">Resume</Nav.Link> */}
            <Link to="/resume" className='nav-link'>Resume</Link>
       
            <Link to="/projects" className='nav-link'>Projects</Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  )
};
export default NavBar