import React from "react";
import Rows from "./components/Rows"
import movieRows from "./movieRows";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {movieRows.map(row => (
        <Rows key={row.id} title={row.title} fetchURL={row.requestUrl} isLarge={row.id===1 ? true: false}/>
      ))}

      {/* <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Rows title="Trending" fetchURL={requests.fetchTrending}/> */}
    </div>
  );
}

export default App;
