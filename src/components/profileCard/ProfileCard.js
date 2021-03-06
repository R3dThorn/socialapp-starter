import React from 'react'
import DataService from '../../dataService'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Message from "../message/Message"
import DeleteUser from '../deleteUser/DeleteUser'
import "./ProfileCard.css"

class ProfileCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about: '',
      username: '',
      displayName: '',
      createdAt: '',
      updatedAt: '',
      pictureLocation: '',
      googleId: '',
      formData: {},
      messages : []
    }
    this.setUserPicture = this.setUserPicture.bind(this)
    this.client = new DataService()
  }
  // On mount, get the user's data (username, picture, and messages sent)
  componentDidMount() {
    console.log(this.props.username)
    this.client.getSingleUser(this.props.username)
      .then(response => this.setState({
        username: response.data.user.username,
        pictureLocation: "https://socialapp-api.herokuapp.com" + response.data.user.pictureLocation,
        displayName: response.data.user.displayName
      }))
    this.client.getUserPicture(this.props.username)
      .then(result => console.log(result))
    this.client.getMessages(100, 0, this.props.username)
      .then(response => this.setState({
        messages: response
      }))
  }

  onChange = event => {
    let pictureSet
    if (event.target.files) {
      pictureSet = event.target.files[0]
    }
    this.setState({ picture: pictureSet })
  }

  fileUpload(file) {
    let formData = new FormData()
    formData.append("picture", file)
    return formData
  }
  setUserPicture() {
    let formData = this.fileUpload(this.state.picture)
    this.client.putUserPicture(this.state.username, formData).then(() => {
      this.client.getSingleUser(this.props.username)
        .then(response => this.setState({
          username: response.data.user.username,
          pictureLocation: "https://socialapp-api.herokuapp.com" + response.data.user.pictureLocation
        }))
    })
      .catch(error => {
        console.error(error)
        alert("Picture too Powerful! Please load a picture that is 200Kb or less.")
      })
  }

  // build tool to prettify date
  dateBuilder(date) {
    if (date) {
      const d = date.slice(0, 10).split('-')
      const month = d[1] - 0
      console.log(month)
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']
      return `${months[month - 1]} ${d[2]}, ${d[0]}`
    }
    return null
  }

  render() {
    const { Content } = Layout;

    const content = {
      backgroundColor: '#fffb8f',
      padding: '50px 0'
    }

    const card = {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      maxWidth: '300px',
      fontFamily: 'Arial',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: 'ffffff',
    }

    const avatar = {
      backgroundColor: '#e6f7ff',
      height: '110px'
    }

    const button = {
      border: 'none',
      outline: '0',
      display: 'inline-block',
      padding: '8px',
      color: 'white',
      backgroundColor: '#000',
      textAlign: 'center',
      cursor: 'pointer',
      width: '94%',
      height: '60px',
      fontSize: '18px',
    }

    let userImage
    if (this.state.pictureLocation === "https://socialapp-api.herokuapp.comnull") {
      userImage = (<div style={avatar} className="avatar">
        <Avatar shape="square" size={130} icon={<UserOutlined />} />
      </div>)
    } else {
      userImage = (<img className="ProfilePicture" src={this.state.pictureLocation} alt="profile picture"/>)
    }

    return (
      <Content style={content} className="content">
        <div style={card} className="Profile">
          {userImage}

          <p>{this.state.username}</p>
          <p>{this.state.about}</p>

          <input onChange={this.onChange} type="file" name="picture" />

          <div style={button} className="Button">
            <button onClick={this.setUserPicture}>Change Picture</button>
          </div>
          <ul>
              {this.state.messages.map(msg => (
                <Message key={msg.id} {...msg} />
                ))}
          </ul>
          <DeleteUser />
        </div>
      </Content>
    );
  }

}

export default ProfileCard