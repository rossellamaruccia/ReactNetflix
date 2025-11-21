import { Container, Row } from "react-bootstrap"
import FetchInfo from "./FetchInfo"

const HomeContainer = () => {
    return (
      <>
        <Container fluid className="bg-black">
          <Row>
            <h1 className="text-white">Movies</h1>
            <FetchInfo movie="Dragon" />
          </Row>
          <Row>
            <h2 className="text-white">Trending Now</h2>
            <FetchInfo movie="Fast" />
          </Row>
          <Row>
            <h2 className="text-white">Watch it Again</h2>
            <FetchInfo movie="Office" />
          </Row>
        </Container>
      </>
    )
}

export default HomeContainer