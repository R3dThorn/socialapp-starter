import axios from 'axios';

class DataService {
    constructor(
        baseURL = 'https://socialapp-api.herokuapp.com',
        client = axios.create()
    ) {
        this.url = baseURL
        this.client = client
        this.userData = JSON.parse(localStorage.getItem("login"))
    }    
    generateConfig() {
        const token = JSON.parse(localStorage.getItem("login")).result.token
        return { headers: {Authorization: `Bearer ${token}`}}
    }

    registerUser(userData){
        return this.client.post(this.url + "/users", userData)
    }
    getUserPicture(username){
        return this.client.get(`${this.url}/users/${username}"/picture"`)
        .catch(error => console.log(error))
    }

    putUserPicture(username, picture) {
        return this.client.put(`${this.url}/users/${username}/picture`, picture, {
            headers: { Authorization: "Bearer " + this.userData.result.token }
        })
    }

    getUsers() {
        return this.client.get(this.url + "/users")

    }
    getSingleUser(username) {
        return this.client.get(`${this.url}/users/${username}`)
    }

    patchUser(userName) {
        return this.client.patch(this.url + "/users/" + userName)
    }
    deleteUser(user){
        return this.client.delete(`${this.url}/users/${user}`, this.generateConfig())
        .catch(error => console.log(error))
    }

    postMessage(input) {
        let message = {
            "text" : input
        }
        return this.client.post(this.url+"/messages",  message, {
            headers: {Authorization: "Bearer " + this.userData.result.token}
           

            
        })
    }

    getMessages(limit, username) {
        let request = {
            params: {
                "limit" : limit,
                "username" : username
            }
        }
        return this.client.get(this.url + "/messages/", request)
        .then(response => {return response.data.messages})
        
    }

    getSpecificMessage(messageID) {
        return this.client.get(this.url + "/messages/" + messageID)
    }

    deleteMessage(messageID) {
        return this.client.delete(this.url + "/messages/" + messageID)
    }
    postLike(messageID) {
        let request = {
            "messageId" : messageID
        }
        return this.client.post(this.url + "/likes", request, {
            headers: {Authorization: "Bearer " + this.userData.result.token}
            
        })
    }

    deleteLike(likeID) {
        return this.client.delete(this.url + "/likes/" + likeID, {
            headers: {Authorization: "Bearer " + this.userData.result.token}
        })
    }
}

export default DataService