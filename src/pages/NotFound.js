import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu"
import "./NotFound.css"


class NotFound extends React.Component {
  render() {
    return (
      
      <div className="NotFound">
        <Menu />
       < Link to="/">To get back to the riot!</Link>
        <p>YOU'VE BEEN QUACKED!{this.props.location.pathname}</p>
        <div className="graduatepic">
        <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.co3hrS-x0mL8IT_6wfG8xwHaK4%26pid%3DApi&f=1"alt="graduation duck"/>
        </div>
      </div>
    );
  }
}

export default NotFound;
