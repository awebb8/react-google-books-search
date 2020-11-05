import axios from "axios";

export default {
    bookSearch: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
    }
}

