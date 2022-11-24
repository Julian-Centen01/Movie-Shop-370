import {useRef, useState} from "react";
import {BACKEND_HOST} from "../config";

const MovieSearch = () => {
    const [movies, setMovies] = useState([]); //create a react state initialized with an empty array
    const searchReference = useRef();

    function handleForm(event) { // when the form is submitted this function gets called
        event.preventDefault();

        //send a post request to backend- fetch returns a promise
        //Promises help with asynchronous operations
        fetch(`${BACKEND_HOST}/movies/search`, { //customizing the request for the backend
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: searchReference.current.value
            })
        }).then(response => response.json())
            .then(results => setMovies(results));
    }

    return <div>
        <form onSubmit={handleForm}> {/*submits whole form -- sends it line 8 to exicute function*/}
            <input type="search" placeholder="search for movies" ref={searchReference}/>
            <button type="submit">Search</button>
        </form>
        <ol>
            {movies.map(movie =>
                <li>{movie.title}</li>)}
        </ol>
    </div>;
};

export default MovieSearch;