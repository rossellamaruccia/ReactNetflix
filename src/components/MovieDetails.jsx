import { useParams } from "react-router-dom"
import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"

const MovieDetails = () => {

    const params = useParams()
    console.log(params)
    const [movie, setMovie] = useState({})
    console.log(movie)

    
    const FetchMovieDetails = () => {
        const Url =
          "http://www.omdbapi.com/?i=" + params.elementId + "&apikey=7ddff0d8&?i="
        fetch(Url)
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error("errore nella chiamata")
            }
          })
          .then((movie) => {
              console.log(movie)
              setMovie({ movie: movie })
                              
          })
          .catch((err) => {
            console.log("error: ", err)
            
          })
    }

    useEffect(() => { FetchMovieDetails() }, [])
    console.log(movie)

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <h1>{movie.movie.Title}</h1>
              <img src={movie.movie.Poster} />
              <p>
                {movie.movie.Year} - {movie.movie.imdbID}
              </p>
            </Col>
          </Row>
        </Container>
      </>
    )

}


export default MovieDetails