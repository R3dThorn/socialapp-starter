import React from "react"
import Menu from "../components/menu/Menu"
import DataService from "../services/dataService"
import Message from "../components/message/Message"
import { userIsAuthenticated } from "../redux/HOCs"

class MessageFeed extends React.Component {
    state = { messages: [] }

    componentDidMount() {
        new DataService().getMessages().then(messages => {
            this.setState({ messages })
        })
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
                <Menu />
                <h1>Duck Feed</h1>
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
