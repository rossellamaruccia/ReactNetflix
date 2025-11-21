// API: http://www.omdbapi.com/?i=tt3896198&apikey=7ddff0d8&s=
// il fetch get ritorna un oggetto, non un array
// montare tre componenti diversi con props = nome_film

import { Component } from "react";
import { Row, Col } from "react-bootstrap";


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
            <Row>
                {
                    this.state.moviesObject.map((result) => {
                        return (
                            <Col><img src= {result.Poster } /></Col>
                        )
                    })
                }
                </Row>
            )  
            }    
        
    }


export default FetchInfo