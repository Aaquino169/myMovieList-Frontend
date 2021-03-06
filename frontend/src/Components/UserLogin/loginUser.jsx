import React,{ Component } from "react"
import {Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

export default class LogUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }

    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
      
    handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.userLogin(userCredentials)
        this.setState({
            loggedIn: true
        })
    }
       

    render() {

        return(
            <div>
                <h1>User Log In</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter Username " value={this.state.username} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                        <Link to="/newUserLogin">
                            <p>New User?</p>
                        </Link>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        )
    }
} 