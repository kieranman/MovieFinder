import Card from "../components/Card.js"
import {useState,useEffect,useContext} from 'react';
import MovieContext from "../context/MovieContext.js";
import './MoviePage.css'
import BeatLoader from 'react-spinners/BeatLoader.js'

export default function MoviePage(){
    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [movies,setMovies]= useState([]);
    const {fetchMovies,fetchGenres} = useContext(MovieContext);
    const [loading,setLoading] = useState(true);
    
    const handleClick =() =>{
        setLoading(true);
        setPage(page + 1);
        setTimeout(() => {
            setLoading(false);
          }, 1000);
    };

    const renderLoading = ()=>{
        console.log(loading);
            if(loading){
                return <BeatLoader/>
            }
            else{
                return <button className="load-more" onClick={handleClick}>Load More</button>
            }
    };

    useEffect(()=>{
        const fetchResultMovies = async ()=>{
            const result =await fetchMovies(page);
            // setMovies(result);
            setTimeout(() => {
                setMovies(pre=>[...pre,...result]);
                setLoading(false); // Hide the loader after 2 seconds
              }, 700);
        } 
        const fetchResultGenres = async ()=>{
            const result =await fetchGenres();
            setGenres(result);
        }
        if(genres.length==0){
            fetchResultGenres();
            console.log("i fetched more genres");
        }
        if(loading){
            fetchResultMovies();
        }
        

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
                {/* <button className="load-more" onClick={handleClick}>Load More</button> */}
                    {renderLoading()}
                </div>
            </main>
        </div>
        
    )
}