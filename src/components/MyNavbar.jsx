import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

const MyNavbar = () => {
    return (
      <>
        <Navbar className="bg-dark w-100">
          <Container className="justify-content-start">
            <Link to="/">
              <img
                alt="logo"
                src="src\assets\logo.png"
                height="35"
                className="navbar.brand d-inline-block align-top"
              />
            </Link>
            <Link className="text-white fs-6" to="/">
              Home
            </Link>
            <Navbar.Brand className="text-white fs-6" href="#movies">
              Movies
            </Navbar.Brand>
            <Link className="text-white fs-6" to="/TV-Shows">
              TV Shows
            </Link>
            <Navbar.Brand className="text-white fs-6" href="#recently_added">
              Recently Added
            </Navbar.Brand>
          </Container>
          <Container className="justify-content-end">
            <Navbar.Text>
              <i class="bi bi-search text-white"></i>
            </Navbar.Text>
            <Navbar.Text>
              <i class="bi bi-bell text-white mx-2"></i>
            </Navbar.Text>
            <Navbar.Text>
              <i class="bi bi-person-circle text-white"></i>
            </Navbar.Text>
          </Container>
        </Navbar>
      </>
    )
}

export default MyNavbar