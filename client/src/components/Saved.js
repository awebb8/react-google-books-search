import React from 'react';
import BookCard from '../components/BookCard';

const Saved = (props) => {
    return (
        <div className="list">
            {
                props.booksSaved.map((book) => {
                    return <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    />
                })
            }
        </div>
    );
};

export default Saved;