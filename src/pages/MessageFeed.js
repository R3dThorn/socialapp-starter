import React from "react";
import Menu from "../components/menu/Menu"
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