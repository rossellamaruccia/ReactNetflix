import { Container, Row } from "react-bootstrap"
import FetchInfo from "./FetchInfo"

const TVShows = () => {
  return (
    <>
      <title>TV Shows</title>
      <Container fluid className="bg-dark">
        <Row>
          <h2 className="text-white">Scrubs</h2>
          <FetchInfo movie="scrubs" />
        </Row>
        <Row>
          <h5 className="text-white">Breaking Bad</h5>
          <FetchInfo movie="Breaking bad" />
        </Row>
        <Row>
          <h5 className="text-white">Malcolm</h5>
          <FetchInfo movie="Malcolm" />
        </Row>
      </Container>
    </>
  )
}

export default TVShows
