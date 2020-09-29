import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  

  handleLogout = event => {
    event.preventDefault()
    this.props.logout().then(result=>{
      console.log(result)
    })
  };

  render() {
    const localCredentials = JSON.parse(window.localStorage.getItem("login"))
    let username = localCredentials.result === null ? "loading" : localCredentials.result.username
    return (
      <div className="Menu">
        <h1>Rioters Reinvented</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to={`/profile/${username}`}>Profile</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/about">About RDR</Link>
            <Link to="/logout" onClick={this.handleLogout}>
              logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
