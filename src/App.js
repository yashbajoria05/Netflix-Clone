import React from "react";
import "./App.css";
import Row from "./Row/Row";
import requests from "./requests";
import Banner from "./Banner/Banner";
import Nav from "./Navbar/Nav";
import "./Navbar/Nav.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Popular on Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
