import React from "react"
import Menu from "../components/menu/Menu"
<<<<<<< HEAD
import { userIsAuthenticated } from "../redux/HOCs"
import DataService from '../dataService'




class MessageFeed extends React.Component{


state= 
{messages: []}

componentDidMount(){
    new DataService()
    getMessages()
    .then(result =>{
        this.setState({messages:result.data.messages})
    })

    
}


    render(){
      if(this.state.messages.length===0)
        
        // need to call the message list from the user's profile with a variable here for use in the render
        return(
        <div className="MessageFeed">
            <Menu/>
            <h1>Sample Text </h1>
</div>
        )
        }

        
}
export default userIsAuthenticated(MessageFeed)
=======
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
        this.client.postMessage(message.value).then(result => {console.log(result)})
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
                <button onClick={this.handleMessage}>Post</button>
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
>>>>>>> 427ca47e8606320e3d6f195df68f68804b2e6afa
