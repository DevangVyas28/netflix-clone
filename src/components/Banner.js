import axios from "../axios";
import React, {useState, useEffect} from "react";
import requests from "../requests/requests";
import "./Banner.css"

const baseURL = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchMovie();
    }, [])

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
            backgroundPosition: "top",
        }}>
            
            <div className="banner-content">
                <h1 className="banner-title">{movie.name}</h1>
                <div className="buttons-container">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h2 className="synopsis">{movie?.overview}</h2>
            </div>
            <div className="fading-bottom"></div>
        </header>
    )
}

export default Banner;