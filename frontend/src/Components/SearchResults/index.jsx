import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter, Link} from "react-router-dom"
import {ListGroup} from "react-bootstrap"


class SearchResults  extends Component {
  constructor(props) {
    super(props)
    console.log("props:",props)

    this.state = {
      
      searchText: props.match.params.searchText,
      searchResults:[]
    }
  }
  

  async componentDidMount() {
    
    console.log("match:",this.props.match)
    console.log("prop in info component:", this.props.movieID)
    const url = "http://www.omdbapi.com/?"
    const apiKey = "&apikey=" + process.env.REACT_APP_APIKEY
    const search = "&s=" + this.state.searchText
    const type = "&type=movie"
    console.log(url+apiKey+search+type)

    const response = await fetch(url+apiKey+search+type);
    const data = await response.json()
    console.log(data)
    const dataList = []
    if(data)
    data.Search.forEach(element => {
    dataList.push(element)
    })
    console.log("searchResults:", dataList)
    this.setState({
        searchResults: dataList
    })
    console.log("state:", this.state)

  }

  
  list() {
    return this.state.searchResults.map(movie => {
        return (
          <ListGroup.Item key={movie.mdbID}>
            <Link to={"/movieInfo/"+ movie.imdbID}>
            {movie.Title}
            </Link>
          </ListGroup.Item>
        )
    })
  }


  render() {
    
    return(
        <div>
            <h1>Search Results</h1>
            {this.list()}
        </div>
      
    )
  }


}

export default withRouter(SearchResults)