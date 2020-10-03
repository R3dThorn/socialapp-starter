import React from "react"
import Menu from "../components/menu/Menu"
import DataService from "../dataService"
import Message from "../components/message/Message"
import { userIsAuthenticated } from "../redux/HOCs"
import InfiniteScroll from "react-infinite-scroll-component"

class MessageFeed extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            messages: [],
            messageCounter: 100,
            hasMore: true
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
            .then(this.setState({ messages : [] }))
            .then(setTimeout(() => {
                    this.client.getMessages()
                        .then(response => {
                            this.setState({ messages : response})
                        })},
                    750
                    )
                )
        .catch((error)=>{(console.error(error))})

    }
    render() {
        if (this.state.messages.length === 0) {
            return (
                <div className="MessageFeed">
                    <Menu isAuthenticated={this.props.isAuthenticated}/>
                    <h1>Duck Feed</h1>
                    <h3>Loading...</h3>
                </div>
            )
        }
        return (
            <>
                <Menu isAuthenticated={this.props.isAuthenticated}/>
                <InfiniteScroll
                dataLength={this.state.messages.length}
                loader={<h3>Loading...</h3>}
                hasMore={this.state.hasMore}
                next={() => {this.client.getMessages(100, this.state.messageCounter)
                        .then(response => {
                            console.log(response)
                            this.setState(state => ({
                                messages: state.messages.concat(response),
                                messageCounter: state.messageCounter += 100
                            }))
                            console.log(this.state.messages)
                            if(response.length === 0){
                                this.setState({ hasMore: false })
                            }
                        })
                }}
                endMessage={
                    <p style={{ textAlign: "center"}}>
                        <b>No More Quacks!</b>
                    </p>
                }
                >
                    <h1>Duck Feed</h1>
                    <div className="post">
                        <label htmlFor="userResponse">Post a message: </label>
                        <input id="userResponse" type="text" name="userResponse"></input>
                        <button onClick={()=>this.handleMessage()}>Post</button>
                    </div>
                    <ul>
                        {this.state.messages.map(msg => (
                        <Message key={msg.id} {...msg} />
                        ))}
                    </ul>
                </InfiniteScroll>
            </>
        )
    }
}

export default userIsAuthenticated(MessageFeed)
