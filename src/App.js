import MoviePage from "./pages/MoivePage";
import Navbar from "./components/Navbar"
import "./App.css";
import {BrowserRouter as Router, Route,Routes,Link, BrowserRouter} from 'react-router-dom';
import ModalPage from "./pages/ModalPage";
export default function App() {
    return (
      <BrowserRouter>
        <div className="background">
          <Navbar />
          <Routes>
            <Route path='/movies' element={<MoviePage />} />
            <Route path='/modal' element={<ModalPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }