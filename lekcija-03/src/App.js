
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AllPosts from './components/AllPosts/AllPosts';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/all-recipes" element={<AllPosts/>} />
          <Route exact path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>


      <Footer></Footer>

    </div>
  );
}

export default App;
