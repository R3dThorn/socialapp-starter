import React from "react"
import "../message/Message.css"
import DataService from "../../dataService"

class Message extends React.Component {
    constructor(props) {
        super(props)
        // For each message, grab its ID, whether or not it's been liked by the signed in user, the amount of likes
        // and the ID of the user's like if it exists
        this.state = {
            messageID: this.props.id,
            likedByUser: false,
            likes: this.props.likes.length,
            userLike: 0
        }
        this.client = new DataService()
        this.handleLike = this.handleLike.bind(this)
    }
    // On mounting, sets the state, checking to see if the message was liked by the signed in user
    componentDidMount() {
        const userCredentials = JSON.parse(localStorage.getItem("login")).result.username
        const userLikes = this.props.likes.find(likes => likes.username === userCredentials)
        this.setState({ likes: this.props.likes.length })
        if (userLikes !== undefined) {
            console.log(userLikes)
            this.setState(state => ({
                likedByUser: true,
                userLike: userLikes.id
            }))
        }
    }
    // If no like, POST a like, and set the state to reflect this change
    handleLike() {
        if (this.state.likedByUser === false) {
            return this.client.postLike(this.state.messageID)
                .then(response => {
                    this.setState((state, props) => ({
                        likedByUser: true,
                        likes: state.likes + 1,
                        userLike: response.data.like.id
                    })
                    )
                })
        }
        // If there is a like, DELETE the like
        else return (
            this.client.deleteLike(this.state.userLike)
                .then(this.setState((state) => ({ likedByUser: false, likes: state.likes - 1 })))
        )
    }
    render() {
        return (
            <li className="Message" id={this.props.id}>
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="like-count">
                    Likes: {this.state.likes}
                    <button onClick={this.handleLike}>
                        Like
                    </button>
                </div>
            </li>
        )
    }
}

export default Message