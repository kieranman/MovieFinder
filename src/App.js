import MoviePage from "./pages/MoivePage";
import Navbar from "./components/Navbar"
import "./App.css";
import {BrowserRouter as Router, Route,Routes,Link, BrowserRouter} from 'react-router-dom';
export default function App() {
    return (
      <BrowserRouter>
        <div className="background">
          <Navbar />
          <Routes>
            <Route path='/movies' element={<MoviePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }