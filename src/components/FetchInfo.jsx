// API: http://www.omdbapi.com/?i=tt3896198&apikey=7ddff0d8&s=
// il fetch get ritorna un oggetto, non un array
// montare tre componenti diversi con props = nome_film

import { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";


class FetchInfo extends Component{
    
        state = {
            moviesObject: [],
        }
        
            FetchFunction = () => {
            const Url = "http://www.omdbapi.com/?i=tt3896198&apikey=7ddff0d8&s="
            fetch(Url + this.props.movie)
                .then((res) => {
                if (res.ok) {return res.json()}
            else {throw new Error('errore nella chiamata')}
                })
                .then((data) => {
                    console.log(data)
                    this.setState({
                        moviesObject: data.Search
                    })
                })
                .catch(err => {
            console.log('error: ', err)
        })
        }

    componentDidMount() { this.FetchFunction() }

    render() {
        return (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {this.state.moviesObject.map((result) => {
              return (
                <Col className="col mb-2 text-center px-1">
                  <Card style={{ height: "10em" }}>
                    <Card.Img
                      src={result.Poster}
                      style={{objectFit: "cover", overflowY: "hidden"}}
                    ></Card.Img>
                  </Card>
                </Col>
              )
            })}
          </Row>
        )  
            }    
        
    }


export default FetchInfo