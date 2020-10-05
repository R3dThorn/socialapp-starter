import React from "react";
import Menu from "../components/menu/Menu";
import "./AboutPage.module.css";
import { userIsAuthenticated } from "../redux/HOCs"

class About extends React.Component {
    render() {
        return (
            <div>
                <Menu isAuthenticated={this.props.isAuthenticated} />

                <section id="images" class="page-row">

                    <div class="image" id="PunkDuck">
                        <h3>Colin Stachelrodt</h3>
                        <a href="">Punk Duckie Rioter</a>
                    </div>

                    <div class="image" id="ZenDuckie">
                        <h3>Elisua Hernandez</h3>
                        <a href="../assets/images/Zenduckie.png">Zen Duckie Rioter</a>
                    </div>

                    <div class="image" id="FunkyDuck">
                        <h3>Janet Cook</h3>
                        <a href="../assets/images/Funkyduck.jpg">Funky Duckie Rioter</a>
                    </div>

                    <div class="image" id="IrishDuckie">
                        <h3>Kylie Jo McCafferty</h3>
                        <a href="../assets/images/Irishduckie.jpg">Irish Duckie Rioter</a>
                    </div>

                </section>

            

                < div id="AboutRDR" ></div >

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
         </div>            

        )
    }
}

export default userIsAuthenticated(About) 