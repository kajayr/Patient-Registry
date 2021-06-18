import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './styles/header.css'
export const Header = () => {
    return(
        <div className="container-fluid">
           <div className="row headerContainer">
            <div className="col align-self-end">
                <Navbar  bg="dark" expand="lg" className="nav nav-color">
                <LinkContainer to="/">
                <Navbar.Brand>Patient Registry</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/patientRegistry">
                <Nav.Link>Patients List</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                <Nav.Link>Application Details</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/education">
                <Nav.Link>About us</Nav.Link>
                </LinkContainer>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
           </div>
        </div>
    )
}