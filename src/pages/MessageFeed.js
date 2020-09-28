import React from "react"
import Menu from "../components/menu/Menu"
import DataService from "../dataService"
import Message from "../components/message/Message"
import { userIsAuthenticated } from "../redux/HOCs"

class MessageFeed extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            messages: [] 
        }
        this.client = new DataService()
        this.handleMessage = this.handleMessage.bind(this)
    }

    componentDidMount() {
        this.client.getMessages().then(messages => {
            this.setState({ messages })
        })
    }
    handleMessage(){
        let message = document.getElementById("userResponse")
        console.log(message.value)
        this.client.postMessage(message.value)
        .then(result => {console.log(result)})

    }
    render() {
        if (this.state.messages.length === 0) {
            return (
                <div className="MessageFeed">
                    <Menu />
                    <h1>Duck Feed</h1>
                    <h3>Loading...</h3>
                </div>
            )
        }

        return (
            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                <h1>Duck Feed</h1>
                <label htmlFor="userResponse">Post a message: </label>
                <input id="userResponse" type="text" name="userResponse"></input>
                <button onClick={()=>this.handleMessage()}>Post</button>
               

                <ul>
                    {this.state.messages.map(msg => (
                    <Message key={msg.id} {...msg} />
                    ))}
                </ul>
            </div>
        )
    }

}

export default userIsAuthenticated(MessageFeed)
