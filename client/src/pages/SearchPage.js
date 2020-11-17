import React, { Component } from 'react';
import Results from '../components/Results';
import Search from '../components/Search';
import API from '../utils/API';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Saved from '../components/Saved'
class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            booksSaved: [],
            searchField: '',
            isSave: false
        }
    }

    getBooks = (e) => {
        e.preventDefault();
        API.bookSearch(this.state.searchField)
        .then((res) => {
            console.log(res.data.items)
            this.setState({ books: [...res.data.items]})
        })
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({ searchField: e.target.value })
    }

    getSaved= (e) => {
        this.setState({ isSave: !this.state.isSave })
        console.log(this.state.isSave)
    }

    // saveBook = (e) =>{
    //     var tempObj = {
    //         id: "id",
    //         thumbnail: "https://images-na.ssl-images-amazon.com/images/I/614UUp7avTL._AC_UL1200_.jpg",
    //         author: "Shakespearee",
    //         title: "Yes"
    //     }
    //     console.log(e.target)
    //     this.setState({ booksSaved: this.state.booksSaved.push(tempObj)})
    // }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Search getBooks={this.getBooks} handleSearch={this.handleSearch} getSaved= {this.getSaved}/>
                { this.state.isSave ? <Saved booksSaved={this.state.booksSaved} /> : 
                <Results books={this.state.books} saveBook = {this.saveBook}/>}
            </div>
        );
    }
}

export default SearchPage;
