import { Container, Row } from "react-bootstrap"
import FetchInfo from "./FetchInfo"

const HomeContainer = () => {
  return (
    <>
      <title>Home</title>
      <Container fluid className="bg-dark">
        <Row>
          <h2 className="text-white">Movies</h2>
          <FetchInfo movie="shaolin" />
        </Row>
        <Row>
          <h5 className="text-white">Trending Now</h5>
          <FetchInfo movie="Matrix" />
        </Row>
        <Row>
          <h5 className="text-white">Watch it Again</h5>
          <FetchInfo movie="Natale" />
        </Row>
      </Container>
    </>
  )
}

export default HomeContainer
