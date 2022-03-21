// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AllPosts from "./components/AllPosts/AllPosts";
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/all-recipes" element={<AllPosts />} />
            <Route exact path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>

        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
