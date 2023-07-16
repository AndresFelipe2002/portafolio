import { getImages } from "../../helpers/img";
import {
  Navbar as NavbarComponent,
  Nav,
} from "react-bootstrap";
import "./Navbar.css";

export const Navbar = () => {
  const { logo } = getImages();
  return (
    <header className="header">
      <NavbarComponent expand="lg" className="bg-body-tertiary">
        <NavbarComponent.Brand href="#home">
          <img
            src={logo}
            alt="logo-portafolio"
            title="logo"
            className="nav-logo"
          />
        </NavbarComponent.Brand>
        <NavbarComponent.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComponent.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" data-scroll-spy>
              Inicio
            </Nav.Link>
            <Nav.Link href="#about" data-scroll-spy>
              Acerca de mí
            </Nav.Link>
            <Nav.Link href="#skills" data-scroll-spy>
              Mis habilidades
            </Nav.Link>
            <Nav.Link href="#projects" data-scroll-spy>
              Proyectos
            </Nav.Link>
            <Nav.Link href="#contact" data-scroll-spy>
              Contactar
            </Nav.Link>
          </Nav>
        </NavbarComponent.Collapse>
      </NavbarComponent>
    </header>
  );
};
