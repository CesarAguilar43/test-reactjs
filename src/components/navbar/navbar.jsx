import { Navbar, Container, Nav } from "react-bootstrap";
import routes from "../../config/navbarRoutes";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { removeImagesSlides } from "../../features/images/imagesSlice";

export const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeImagesSlides());
    dispatch(logout());
  };
  return (
    <header>
      <Navbar expand="lg" fixed="top" className="navbar-header">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="header-toggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end" navbarScroll>
              {[
                ...routes.map((route) => {
                  return (
                    <Nav.Item key={route.id}>
                      <NavLink to={route.path} className="navlink">
                        {route.title}
                      </NavLink>
                    </Nav.Item>
                  );
                }),
              ]}
              {isAuthenticated ? (
                <Nav.Item>
                  <Link onClick={handleLogout} className="navlink">
                    Salir
                  </Link>
                </Nav.Item>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
