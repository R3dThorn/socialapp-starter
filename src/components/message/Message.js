import React from "react"
import "../message/Message.css"

const Message = props => {
    return (
        <li className="Message">
            {console.log(props.id)}
            At {props.createdAt}, {props.username} posted:
            <br />
            {props.text}
    <div className="like-count"> Likes: {props.likes.length}</div>
        </li>
    )
}

export default Message