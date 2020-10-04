import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs"

class Home extends React.Component {
  render() {

    const motto = {
      fontStyle: 'italic',
      textAlign: 'center',
      fontFamily: 'arial',
    }
    const flex = {
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-evenly',
    }


    return (
      <div className="Home">
        <Menu />
        <h2 style={motto} className="Home">We're not bad ducks, we're bad ass!</h2>
        <div style={flex}>
          <div className="LeftSide">
            <div className="Login">
              <LoginForm />
            </div>
            <RegistrationForm />
          </div>
          <div className="RightSide">
            <div className="Picture">
              <img id="homeDuck" src='https://ih1.redbubble.net/work.6533007.1.mtd,375x360,n,s,TW9vbiBsaXQgbmlnaHQh,ffffff.jpg' />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
