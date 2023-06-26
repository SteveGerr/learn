import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AppButton from '../buttons/AppButton';
import AppLogo from './logo/AppLogo';
import LogoSvg from '../../assets/svg/logo-svg.svg';
import './header.scss';

const AppHeader = ({ onRegister }) => {
    return (
      <Navbar className='bg-white' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='header__logo'>
            <AppLogo imgSrc={LogoSvg} text={'Learn'}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav m-auto">
            <Nav className="me-auto ms-auto column-gap-xl-5">
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">link 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                link 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">link 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Universities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">link 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                link 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">link 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#online-degrees">Online Degrees</Nav.Link>
              <Nav.Link href="#teachers">Teachers</Nav.Link>
            </Nav>
            <Nav>
            <AppButton btnLink>Log in</AppButton>
            <AppButton click={onRegister}>Register</AppButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default AppHeader;