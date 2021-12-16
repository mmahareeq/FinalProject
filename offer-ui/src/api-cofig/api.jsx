import axios from 'axios'

export default axios.create({
    baseURL:"https://apimena.herokuapp.com/",
    headers:
    {
        "Content-type":"application/json"
    }
});