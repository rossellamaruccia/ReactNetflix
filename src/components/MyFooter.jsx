import { Container, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

const MyFooter = () => {
  return (
    <>
      <Container fluid className="mx-auto py-5 bg-dark">
        <Row className="w-50 mx-auto">
          <Col className="col col-12">
            <i class="bi bi-facebook text-secondary"></i>
            <i class="bi bi-instagram text-secondary mx-2"></i>
            <i class="bi bi-twitter text-secondary"></i>
            <i class="bi bi-youtube text-secondary mx-2"></i>
          </Col>
        </Row>
        <Row className="w-50 mx-auto">
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
          <Col className="col col-3">
            <a className="link-secondary link-underline-opacity-0 d-block">
              Audio description
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Investor Relations
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Legal Notice
            </a>

          </Col>
          <Col className="col col-3">
            <a className="link-secondary link-underline-opacity-0 d-block">
              Help Center
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Jobs
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Cookie Preferences
            </a>

          </Col>
          <Col className="col col-3">
            <a className="link-secondary link-underline-opacity-0 d-block">
              Gift Cards
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              Made w/love
            </a>
            <a className="link-secondary link-underline-opacity-0 d-block">
              by a 90s kid
            </a>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
