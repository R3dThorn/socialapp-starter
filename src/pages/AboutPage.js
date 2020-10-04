import React from "react";
import Menu from "../components/menu/Menu";
import "./AboutPage.module.css";
import { userIsAuthenticated } from "../redux/HOCs"

class About extends React.Component {
    render() {
        return (
            <section>
                <Menu isAuthenticated={this.props.isAuthenticated} />

                <div id="AboutRDR"></div>

                    <h1>WHO WE ARE!</h1>
                    <p>
                        We’re <strong>RIOTERS REINVENTED</strong>. We’re not your run-of-the-mill developers.
                        <br></br>
                        We take rioting and make it our own. We mold breakers.
                        <br></br>
                        We don’t give a <strong>QUACK</strong>, cuz we all about the hack!
                        <br></br>
                        As code innovaters we invite you to join the Riot!
                        <br></br>
                    </p>
                    <h2>"We're not bad ducks, We're badass!"</h2>
                



                <div className="Gallery">
                    {/* <img src="../assets/images/Punkduckie.jpg">Punk Duckie Rioter</img>
                        <div className="desc"> Colin Stachelrodt </div> 
                    <img src="../assets/images/Zenduckie.png">Zen Duckie Rioter</img>
                        <div className="desc"> Elisua Hernandez </div>
                    <img src="../assets/images/Funkyduck.jpg">Funky Duckie Rioter</img>
                        <div className="desc"> Janet Cook </div>
                    <img src="../assets/images/Irishduckie.jpg">Irish Duckie Rioter</img>
                        <div className="desc"> Kylie Jo McCafferty </div> */}
                </div>

            </section>





        )
    }
}

export default userIsAuthenticated(About) 