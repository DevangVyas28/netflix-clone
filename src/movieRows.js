import requests from "./requests/requests";


const movieRows = [
    {
        id:1,
        title: "Netflix Originals",
        requestUrl: requests.fetchNetflixOriginals,
    },
    {
        id:2,
        title: "Trending",
        requestUrl: requests.fetchTrending,
    },
    {
        id:3,
        title: "Top Rated",
        requestUrl: requests.fetchTopRated,
    },
    {
        id:4,
        title: "Action",
        requestUrl: requests.fetchActionMovies
    },
    {
        id:5,
        title: "Comedy",
        requestUrl: requests.fetchComedyMovies
    },
    {
        id:6,
        title: "Horror",
        requestUrl: requests.fetchHorrorMovies
    },
    {
        id:7,
        title: "Romance",
        requestUrl: requests.fetchRomanceMovies
    },
    {
        id:8,
        title: "Documantaries",
        requestUrl: requests.fetchDocumantaries
    },
]

export default movieRows;