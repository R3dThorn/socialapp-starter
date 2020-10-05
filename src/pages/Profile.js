import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import ProfileCard from '../components/profileCard/ProfileCard'
import { Avatar } from 'antd';
import { userIsAuthenticated } from "../redux/HOCs";
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import DataService from "../dataService"


const Profile = props => {
  
  const { Header, Content, Footer } = Layout;
  
  const header = {
    backgroundColor: '#73d13d',
    textAlign: 'center',
    margin: 'auto',
    border: '0',
    
    fontSize: '50px',
    padding: '30px',
    fontFamily: 'fantasy',
  }
  const footer = {
    backgroundColor: '#73d13d',
  }
  return (
    <>
        <Layout>
          <Menu isAuthenticated={props.isAuthenticated} username={props.username}/>
          <ProfileCard username={props.username}/>

          <Header style={header} className="header">
            Rioters Reinvented LLC
          </Header>
          <Footer style={footer} className="footer">
          </Footer>
        </Layout>
      </>
    );
}

export default userIsAuthenticated(Profile);