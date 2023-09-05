import MoviePage from "./pages/MoivePage";
import Navbar from "./components/Navbar"
import "./App.css";
import {BrowserRouter as Router, Route,Routes,} from 'react-router-dom';
export default function App(){



    return (
        <div className="background">
            
            <Navbar/>
                <Router>
                <Routes>
                    <Route path='movies' element={<MoviePage/>}/>
                </Routes>
            </Router>

        </div>
        
    )
};