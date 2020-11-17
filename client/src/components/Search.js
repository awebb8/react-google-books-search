const Search = (props) => {
    return(
        <>
        <form onSubmit={props.getBooks} className="form-inline my-2 my-lg-0 search-bar">
            <input onChange={props.handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        
        </form>
        <button onClick = {props.getSaved} className="btn btn-outline-success my-2 my-sm-0" type="submit">check Saved books</button>
        </>
    )
}

export default Search;