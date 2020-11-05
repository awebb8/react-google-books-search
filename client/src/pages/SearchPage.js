import React from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';

function SearchPage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Search />
            <Results />
        </div>
    );
};

export default SearchPage;