import './index.css'
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import {MovieProvider} from './context/MovieContext';
import {TvShowProvider} from './context/TvShowContext';
const el = document.getElementById('root');


const root = ReactDOM.createRoot(el);

root . render(
    <TvShowProvider>
    <MovieProvider>
        <App/>
    </MovieProvider>
    </TvShowProvider>);
