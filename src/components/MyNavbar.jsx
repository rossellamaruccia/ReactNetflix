import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import "bootstrap-icons/font/bootstrap-icons.css"

const MyNavbar = () => {
    return (
      <>
        <Navbar className="bg-dark w-100">
          <Container className="justify-content-start">
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="src\assets\logo.png"
                height="35"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Brand className="text-white fs-6" href="#home">
              Home
            </Navbar.Brand>
            <Navbar.Brand className="text-white fs-6" href="#movies">
              Movies
            </Navbar.Brand>
            <Navbar.Brand className="text-white fs-6" href="#TV-Shows">
              TV Shows
            </Navbar.Brand>
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