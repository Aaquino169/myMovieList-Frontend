import React,{ Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LoginUser from "../UserLogin/loginUser"
import NewUserLogin from "../UserLogin/newUserLogin"


export default class LogIn extends Component {


    render() {
        return(
          <div>
            <Router>
              <Switch>

                <Route path="/userLogin">
                  <LoginUser checkLoginStatus={this.props.checkLoginStatus} userLogin={this.props.userLogin} />
                </Route>

                <Route path="/newUserLogin" exact>
                  <NewUserLogin newUser={this.props.newUser} />
                </Route>
                
              </Switch>
            </Router>
          </div>
        )
    }
} 