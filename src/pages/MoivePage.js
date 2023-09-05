import Card from "../components/Card.js"
import {useState,useEffect,useContext} from 'react';
import MovieContext from "../context/MovieContext.js";
import './MoviePage.css'

export default function MoviePage(){
    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [movies,setMovies]= useState([]);
    const {fetchMovies,fetchGenres} = useContext(MovieContext);

    const handleClick =() =>{
        console.log(page+1);
        setPage(page+1);
    };

    useEffect(()=>{
        const fetchResultMovies = async ()=>{
            const result =await fetchMovies(page);
            setMovies(pre=>[...pre,...result]);
            // setMovies(result);
        } 
        const fetchResultGenres = async ()=>{
            const result =await fetchGenres();
            setGenres(result);
        }
        if(genres.length==0){
            fetchResultGenres();
            console.log("i fetched more genres");
        }
        fetchResultMovies();


    },[page]);


    const renderedMovies = movies.map((movie)=>{
        return <Card key={movie.id} movie={movie} genres={genres}/>;
    })

    return (
        <div className="background">
            <div className="hidden-nav"></div>
            <main className="grid">
                {renderedMovies}
                <div className="page-changer">
                    <button className="load-more" onClick={handleClick}>Load More</button>
                </div>
            </main>
        </div>
        
    )
}