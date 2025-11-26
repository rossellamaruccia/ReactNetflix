// API: http://www.omdbapi.com/?i=tt3896198&apikey=7ddff0d8&s=
// il fetch get ritorna un oggetto, non un array
// montare tre componenti diversi con props = nome_film

import { Component } from "react"
import { Row, Col, Card, Alert } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"

class FetchInfo extends Component {
  state = {
    moviesObject: [],
    loading: true,
    error: false,
  }

  FetchFunction = () => {
    const Url = "http://www.omdbapi.com/?i=tt3896198&apikey=7ddff0d8&s="
    fetch(Url + this.props.movie)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore nella chiamata")
        }
      })
      .then((data) => {
        console.log(data)
        const MoviesArray = []
        for (let i = 0; i < 6; i++) {
          MoviesArray.push(data.Search[i])
        }
        this.setState({
          moviesObject: MoviesArray,
          loading: false,
        })
      })
      .catch((err) => {
        console.log("error: ", err)
        this.setState({
          loading: false,
          error: true,
        })
      })
  }

  componentDidMount() {
    this.FetchFunction()
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <div>
            <Spinner
              animation="border"
              role="status"
              className="mx-auto"
              variant="light"
            />
          </div>
        )}

        {this.state.error ? (
          <div>
            <Alert variant="danger">Errore nel caricamento</Alert>
          </div>
        ) : (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
              {this.state.moviesObject.map((result) => {
                return (
                  // <Link to={'/details'+{result.imdbID}} >
                  <Col
                    key={result.imdbID}
                    className="col mb-2 text-center px-1"
                  >
                    <Card
                      style={{
                        height: "8em",
                        borderRadius: "0",
                        border: "none",
                      }}
                    >
                      <Card.Img
                        src={result.Poster}
                        style={{
                          objectFit: "cover",
                          objectPosition: "left top",
                          overflow: "hidden",
                          borderRadius: "0",
                        }}
                      ></Card.Img>
                    </Card>
                  </Col>
                // </Link>
              )
            })}
          </Row>
        )}
      </>
    )
  }
}

export default FetchInfo
