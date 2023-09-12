import Card from "../components/Card.js"
import {useState,useEffect,useContext} from 'react';
import MovieContext from "../context/MovieContext.js";
import './MoviePage.css'
import BeatLoader from 'react-spinners/BeatLoader.js'
import Modal from "../components/Modal.js";
import Filters from "../components/Filters.js";
export default function MoviePage(){
    const {fetchMovies,fetchGenres,fetchMoviesByTitle} = useContext(MovieContext);

    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [movies,setMovies]= useState([]);
    const [loading,setLoading] = useState(true);
    const [openModal,setOpenModal] = useState(false);
    const [movieModalId,setMovieModalId] = useState();
    const [search,setSearch] = useState("");
    
    // pagination
    const handleClick =() =>{
        setLoading(true);
        setPage(page + 1);
        setTimeout(() => {
            setLoading(false);
          }, 1000);
    };

    // handles modal close and open for cards
    const handleCardClick = (movieId)=>{
        setMovieModalId(movieId);
        setOpenModal(true);
    };
    const handleModalClose = ()=>{
        setOpenModal(false);
    };


    // icon and score
    const renderLoading = ()=>{
        if(loading){
            return <BeatLoader color="#b22222"/>
        }
        else{
            return <button className="load-more" onClick={handleClick}>Load More</button>
        }
    };

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

    const fetchResultsSearch = async ()=>{
        const result =await fetchMoviesByTitle(page,search);
        setTimeout(() => {
            setMovies(pre=>[...pre,...result]);
            setLoading(false); // Hide the loader after 2 seconds
          }, 700);
    }

    // Search functionality
    const handleSearch = (input)=>{
        setLoading(true);
        setMovies([])
        setPage(1);
        setSearch(input);

    }


    useEffect(()=>{
        if(genres.length===0){
            fetchResultGenres();
        }
        if((loading && search=="") || (page===1 && search==="")){
            fetchResultMovies();
            console.log("normal movies")
        }
        else if(loading && search!=""){
            fetchResultsSearch();
            console.log("filter search")
        }
        
        

    },[page,search]);


    const renderedMovies = movies.map((movie)=>{
        return <Card key={movie.id} movie={movie} genres={genres} openModal={handleCardClick}/>;
    })

    return (
        <div className="background">
            {openModal && <Modal closeModal={handleModalClose} movieId={movieModalId}/>}
            <Filters handleSearch={handleSearch}/>

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