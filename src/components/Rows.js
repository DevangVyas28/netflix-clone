import React, { useState, useEffect } from "react";
import axios from "../axios"
import "./Rows.css"


const baseURL = "https://image.tmdb.org/t/p/original/"


function Rows({title, fetchURL, isLarge}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
        }
        setTimeout(() => {
            fetchMovies();
        }, 500)
        
    }, [fetchURL])

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row-container">
                {movies.map(movie => (
                    <img key={movie.id} className={`poster ${isLarge && "poster-large"}`} src={`${baseURL}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>

        </div>
        
    )
}

export default Rows;