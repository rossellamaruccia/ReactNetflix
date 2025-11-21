import { Container, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

const MyFooter = () => {
  return (
    <>
      <Container fluid className="mx-auto py-5 bg-black">
        <Row>
          <Col className="col col-12">
            <i class="bi bi-facebook text-secondary"></i>
            <i class="bi bi-instagram text-secondary mx-2"></i>
            <i class="bi bi-twitter text-secondary"></i>
            <i class="bi bi-youtube text-secondary mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col className="col col-3">
            <a className="link-secondary link-underline-opacity-0 d-block">
              Audio and subtitles
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Media Center
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Privacy
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
