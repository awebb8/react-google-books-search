import axios from "axios";

export default {
    bookSearch: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
    },
    postBook: function (id, book) {
        return axios.post(`/api/books/${id}`, book);
    },
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`)
    }
}

