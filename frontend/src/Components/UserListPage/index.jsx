import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export default class UserListPage  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      userList:[]
    }
  }

  async componentDidMount() {
    const url = process.env.REACT_APP_API_URL + "/user/userList"
    const response = await fetch(url,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
      credentials:"include"
    });
    const data = await response.json()
    const dataList = []
    data.forEach(element => {
    if(element.Poster === "N/A"){
      element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
    }
    dataList.push(element)
    })
    console.log("userList:", dataList)
    this.setState({
      userList: dataList
    })
    console.log("state:", this.state)
  }

  removeFromList = async (movieID) => {
    const url = process.env.REACT_APP_API_URL + "/user/removeFromList/" + movieID 
    console.log(movieID)
    const response = await fetch(url,{
      method: "PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      credentials:"include"
    })
    const data = await response.json()
    console.log(data)
    const dataList = []
    data["Movie List"].forEach(element => {
    dataList.push(element)
    })
    console.log("userList:", dataList)
    this.setState({
      userList: dataList
    })
    console.log("state:", this.state)
  }

  list() {
    return this.state.userList.map(movie => {
        return (
          <ListGroup.Item className="listItem" key={movie.mdbID}>
            <Link to={"/movieInfo/"+ movie.imdbID}>
            {movie.Title}
            </Link>
            <p></p>
            <Button className="listButton" onClick={() => (this.removeFromList(movie.imdbID))}>Remove</Button>
          </ListGroup.Item>
        )
    })
  }

  render() {
    return(
      <div>
        <h1 className="titles">My List</h1>
        <ListGroup>
          {this.list()}
        </ListGroup>
      </div>
    )
  }


}