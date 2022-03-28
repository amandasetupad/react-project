import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AllPosts from "./components/AllPosts/AllPosts";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/404Page/404Page";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width:100%
  }

  a:visited{
    color: white;
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
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/all-recipes" element={<AllPosts/>} />
            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </BrowserRouter>

        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
