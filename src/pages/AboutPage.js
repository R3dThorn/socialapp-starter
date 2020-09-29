import React from "react";
import Menu from "../components/menu/Menu";

class About extends React.Component{
    render() {
        return (
            <div className="About">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <h1>About</h1>
                <p>
                    We’re Rioters Reinvented. We’re not your run-of-the-mill developers.
                    <br></br>
                    We take rioting and make it our own. We mold breakers.
                    <br></br>
                    We don’t give a <strong>QUACK</strong>, cuz we all about the hack!
                    <br></br>
                    As code innovaters we invite you to join the Riot!
                    <br></br>
                    Get out da box. Come take our quiz to see what kind of Rioter are you?
                </p>
            </div>
        )
    }
}

export default About 