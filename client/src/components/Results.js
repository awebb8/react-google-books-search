import React from 'react';
import BookCard from './BookCard';

const Results = (props) => {
    return (
        <div className="list">
            {
                props.books.map(book => {
                    return <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    saveBook = {props.saveBook}/>
                })
            }
        </div>
    );
};

export default Results;
