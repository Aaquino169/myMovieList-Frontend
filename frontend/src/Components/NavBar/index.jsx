import React, {Component} from "react";
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap"
import { Redirect, Link} from "react-router-dom"


export default class NavBar  extends Component {
    constructor(props) {
        super(props)
        console.log("props info page:", props)
        this.state ={
            searchText:"",
            loggedIn: props.loggedIn,
            search:false

        }
    }
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
    }

    handleSubmit () {
        this.setState({
            search: true
        })
    }
    
    render() {
        if(this.state.search) {
            return(
              <Redirect to={"/searchResults/"+ this.state.searchText}/>
            )
          }
        return(
            <div>
                    
                    
                            <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/home">MyMovieList</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/myList">My List</Nav.Link>
                            </Nav>
                            <Nav.Link href="/userLogin">Login</Nav.Link>
                            <Nav.Link onClick={this.props.userLogout}>Log Out</Nav.Link>
                            <Form inline onSubmit={this.handleSubmit}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchText} onChange={this.handleChange}/>
                            <Link to={"/searchResults/"+ this.state.searchText}>
                                <Button type="submit" variant="outline-info">Search</Button>
                            </Link>
                            </Form>
                            </Navbar>
                        
                    
            </div>
        )
    }
}