import React, { Component, createElement } from "react"
import "../message/Message.css"
import DataService from "../../dataService"
import { Comment, Tooltip } from "antd"
import { LikeOutlined, LikeFilled } from '@ant-design/icons';

class Message extends Component {
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
    // If no like, POST a like, and set the state to reflect this change. 2 second cooldown on button clicks
    handleLike() {
        return new Promise(() => {
            document.getElementById(this.state.messageID).disabled = false
            setTimeout(() => {
                if (this.state.likedByUser === false) {
                    document.getElementById(this.state.messageID).disabled = true
                    return (this.client.postLike(this.state.messageID)
                            .then(response => {
                                this.setState((state, props) => ({
                                    likedByUser: true,
                                    likes: state.likes + 1,
                                    userLike: response.data.like.id
                                })
                            )
                        }))
                }
                // If there is a like, DELETE the like
                else {
                    document.getElementById(this.state.messageID).disabled = true
                    return this.client.deleteLike(this.state.userLike)
                        .then(this.setState((state) => ({ likedByUser: false, likes: state.likes - 1 })))
                }
            }, 2000)
        })
    }
    render() {
        const action = [
            <Tooltip key="comment-basic-like">
                <span onClick={this.handleLike}>
                    {createElement(this.state.likedByUser === true ? LikeFilled : LikeOutlined)}
                    <span>{this.state.likes}</span>
                </span>
            </Tooltip>
        ]
        return (
            <li className="Message" id={this.props.id}>
                <Comment 
                    actions={action}
                    author={this.props.username}
                    content={<p>{this.props.text}</p>}
                    datetime={<Tooltip>
                    {this.props.createdAt}
                    </Tooltip>
                    }
                />
            </li>
        )
    }
}

export default Message