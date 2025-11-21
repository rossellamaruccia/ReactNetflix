import { Container, Row } from "react-bootstrap"
import FetchInfo from "./FetchInfo"

const HomeContainer = () => {
    return (
      <>
        <Container fluid className="bg-black">
          <Row>
            <h1 className="text-white">Movies</h1>
            <FetchInfo movie="Star Wars" />
          </Row>
          <Row>
            <h1 className="text-white">Series</h1>
            <FetchInfo movie="Breaking Bad" />
          </Row>
          <Row>
            <h1 className="text-white">Series</h1>
            <FetchInfo movie="Harry Potter" />
          </Row>
        </Container>
      </>
    )
}

export default HomeContainer