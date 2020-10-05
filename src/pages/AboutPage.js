import React from "react";
import Menu from "../components/menu/Menu";
import "./AboutPage.module.css";
import { userIsAuthenticated } from "../redux/HOCs"

const AboutPage = props => {
    const container = {
        padding: '40px',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
    }
    const Janet = {
        padding: "0 auto",
        width:'150px',
        justifyContent: "center"
    }
    const Kylie = {
        width: '150px',
        padding: "0 auto"
    }
    const Elisua = {
        width: '150px',
        padding: "0 auto"
    }
    const Colin = {
        width: '150px',
        padding: "0 auto",
    }
    const funkie = {
        width: '150px',
        height: '150px',
    }
    const irish = {
        width: '150px',
        height: '150px',
    }
    const zen = {
        width: '150px',
        height: '150px',
    }
    const punk = {
        width: '150px',
        height: '150px',
    }
    return (
        <div>
            <Menu isAuthenticated={props.isAuthenticated} />

            <div className="About">
                <div style={container} className="Container">
                    <div style={Janet} className="Janet">
                        <img  style={funkie} id="FunkieDuckie" src='https://i.pinimg.com/originals/74/ef/87/74ef87acc87831e952237d91bf384fbf.jpg' />
                        <p><b>Janet: Funky Duckie</b></p>
                    </div>
                    <div style={Kylie} className="Kylie">
                        <img style={irish} id="IrishDuckie" src='https://i.pinimg.com/originals/f7/5f/13/f75f132232d5ab903938c49ac5da07a4.jpg' />    
                        <p><b>Kylie: Irish Duckie</b></p>
                    </div>
                    <div style={Elisua} className="Elisua">
                        <img style={zen} id="ZenDuckie" src='https://live.staticflickr.com/5616/30989495205_7586077853_b.jpg' />    
                        <p><b>Elisua: Zen Duckie</b></p>
                    </div>
                    <div style={Colin} className="Colin">
                        <img style={punk} id="PunkieDuck" src='https://lilalu-shop.com/media/image/27/b1/da/lilalu-quietscheente-punker-punk-F_600x600.png' />
                        <p><b>Colin: Punk Duck</b></p>
                    </div>
                </div>
            </div>

            <div>
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
        </div>            

    )
}

export default userIsAuthenticated(AboutPage) 