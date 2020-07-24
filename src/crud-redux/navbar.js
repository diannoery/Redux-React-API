import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./home";
import MeetingPage from "./mettinglistApi";
class Navbar extends React.Component {
  render() {
    const styleLink = {
      color: "white",
      marginLeft: 10,
    };

    let { logout } = this.props;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link style={styleLink} to="/">
              Home
            </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link style={styleLink} to="/meeting">
                    Metting List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/meeting">
              <MeetingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
