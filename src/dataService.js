import axios from 'axios';

class DataService {
    constructor(
        baseURL = 'https://socialapp-api.herokuapp.com',
        client = axios.create()
    ) {
        this.url = baseURL
        this.client = client
        this.token = JSON.parse(localStorage.getItem("login")).result.token
    }
    registerUser(userData) {
        return this.client.post(this.url + "/users", userData)
    }

    getUserPicture(username) {
        return this.client.get(this.url + `/users/${username}` + "/picture")
    }

    putUserPicture(username, picture) {
        return this.client.put(`${this.url}/users/${username}/picture`, picture, {
            headers: { Authorization: "Bearer " + this.token }
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

    deleteUser(userName) {
        return this.client.delete(this.url + "/users/" + userName)
    }

    postMessage(input) {
        let message = {
            "text" : input
        }
        return this.client.post(this.url+"/messages", message, {
            headers: {Authorization: "Bearer " + this.token}
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
            headers: {Authorization: "Bearer " + this.token}
        })
    }

    deleteLike(likeID) {
        return this.client.delete(this.url + "/likes/" + likeID, {
            headers: {Authorization: "Bearer " + this.token}
        })
    }
}

export default DataService