import Card from "./components/Card"
import Navbar from "./components/Navbar"
import "./App.css";
import {useState,useEffect,useContext} from 'react';
import MovieContext from "./context/MovieContext";
export default function App(){

    const [genres,setGenres] = useState([]);
    const [movies,setMovies]= useState([]);
    const {fetchMovies,fetchGenres} = useContext(MovieContext);

    useEffect(()=>{
        const fetchResultMovies = async ()=>{
            const result =await fetchMovies();
            setMovies(result);
        } 
        const fetchResultGenres = async ()=>{
            const result =await fetchGenres();
            setGenres(result);
        } 
        fetchResultMovies();
        fetchResultGenres();

    },[]);


    const renderedMovies = movies.map((movie)=>{
        return <Card key={movie.id} movie={movie} genres={genres}/>;
    })

    return (
        <div className="background">
            
            <Navbar/>
            <main className="grid">
                {renderedMovies}
            </main>
        </div>
        
    )
};