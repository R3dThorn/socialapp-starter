import React from "react";
import Menu from "../components/menu/Menu";
import ProfileCard from '../components/profileCard/ProfileCard'
import { userIsAuthenticated } from "../redux/HOCs";
import { Layout } from 'antd';
import "./Profile.css"


const Profile = props => {
  
  const { Footer } = Layout;
  
  const footer = {
    backgroundColor: '#73d13d',
    textAlign: 'center',
    margin: 'auto',
    border: '0',
    fontSize: '36px',
    padding: '30px',
    fontFamily: 'fantasy',
  }
  return (
    <>
        <Layout>
          <Menu isAuthenticated={props.isAuthenticated} username={props.username}/>
          <ProfileCard username={props.username}/>
          <Footer style={footer} className="footer">
            Rioters Reinvented LLC

          </Footer>
        </Layout>
      </>
    );
}

export default userIsAuthenticated(Profile);