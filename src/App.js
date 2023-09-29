import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/movie/:TMDPID"
            element={<MovieDetails></MovieDetails>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
