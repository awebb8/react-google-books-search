import React from 'react';

const BookCard = (props) => {
    return (
        <div className="card-container" id={props.id}>
            <img className="book-image" src={props.image} alt="book image"  />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
                <button onClick={props.saveBook}>Save</button>
            </div>
        </div>
    );
};

export default BookCard;