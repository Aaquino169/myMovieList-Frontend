import React, {Component} from "react";
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom"



export default class MovieHome  extends Component {
    constructor(props) {
        super(props)

        this.state ={
            moviesList:[],
            
        }

    }

    
    
    async componentDidMount() {
        const url = "http://www.omdbapi.com/?"
        const apiKey = "&apikey=" + process.env.REACT_APP_APIKEY
        const search = "&s="+ this.props.search
        const type = "&type=movie"
        console.log(apiKey)
        const response = await fetch(url+apiKey+type+search);
        const data = await response.json()
        const dataList = []
        console.log(url)
        data.Search.forEach(element => {
            if(element.Poster === "N/A"){
                element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
            }
            dataList.push(element)
        });
        console.log("dataList:", dataList)
        this.setState({
            moviesList: dataList
        })
    }

    target = (movieID) => {
        console.log("movieID in movie home:",movieID)
        this.props.targetMovieID(movieID)
    }


    list() {
        return this.state.moviesList.map(movie => {
            return (
                <Card  className="bg-dark text-white movie-card" key={movie.imdbID}>
                <Link to={"/movieInfo/"+ movie.imdbID}>
                    <Card.Img className="card-Img" variant="top" src={movie.Poster} onClick={() => (this.target(movie.imdbID))}/>
                </Link>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                </Card.Body>
                </Card>    
            )
        })
    }

    render() {

        return(
            <div>
                    <h2 className="titles" >{this.props.title}</h2>
                    <div className= "card-container">
                        {this.list()}
                    </div>
            </div>
            
            
        )
    }

}