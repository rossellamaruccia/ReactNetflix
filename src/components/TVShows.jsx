import { Container, Row } from "react-bootstrap"
import FetchInfo from "./FetchInfo"

const TVShows = () => {
  return (
    <>
      <title>TV Shows</title>
      <Container fluid className="bg-dark">
        <Row>
          <h2 className="text-white">The Office</h2>
          <FetchInfo movie="office" />
        </Row>
        <Row>
          <h5 className="text-white">Stranger Things</h5>
          <FetchInfo movie="Stranger Things" />
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
