import MoviePage from "./pages/MoivePage";
import TvShowPage from "./pages/TvShowPage";
import Navbar from "./components/Navbar"
import "./App.css";
import {BrowserRouter as Router, Route,Routes,Link, BrowserRouter} from 'react-router-dom';
export default function App() {
    return (
      <BrowserRouter>
        <div className="background">
          <Navbar />
          <Routes>
            <Route path='/' element={<MoviePage/>} />
            <Route path='/movies' element={<MoviePage />} />
            <Route path='/tv' element={<TvShowPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }