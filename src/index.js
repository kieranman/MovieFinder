import './index.css'
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import {Provider} from './context/MovieContext';
const el = document.getElementById('root');


const root = ReactDOM.createRoot(el);

root . render(
    <Provider>
        <App/>
    </Provider>);
