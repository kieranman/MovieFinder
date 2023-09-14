import Card from "../components/Card.js"
import {useState,useEffect,useContext} from 'react';
import './MoviePage.css'
import BeatLoader from 'react-spinners/BeatLoader.js'
import Modal from "../components/Modal.js";
import Filters from "../components/Filters.js";
import TvShowContext from "../context/TvShowContext.js";
export default function MoviePage(){
    const {fetchTvShows,fetchGenres} = useContext(TvShowContext);

    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [tvShows,setTvShows]= useState([]);
    const [loading,setLoading] = useState(true);
    const [openModal,setOpenModal] = useState(false);
    const [movieModalId,setMovieModalId] = useState();
    const [search,setSearch] = useState("");
    const [sort,setSort] = useState("");
    
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
        console.log(movieId);
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

    const fetchResultTvShows = async ()=>{
        const result =await fetchTvShows(page);
        // setMovies(result);
        setTimeout(() => {
            setTvShows(pre=>[...pre,...result]);
            setLoading(false); // Hide the loader after 2 seconds
          }, 700);
    } 


    const fetchResultGenres = async ()=>{
        const result =await fetchGenres();
        setGenres(result);
    }

    // Search functionality
    const handleSearch = (input)=>{
        setLoading(true);
        setTvShows([])
        setPage(1);
        setSearch(input);
    }

    const handleSort = (input) =>{
        console.log(input)
        setLoading(true);
        setTvShows([])
        setSort(input);
        setSearch("");
        setPage(1);
        
    }


    useEffect(()=>{


        if(genres.length===0){
            fetchResultGenres();
        }
        if(sort==="" && search==="" && loading){
            fetchResultTvShows();
            console.log("normal movies")
        }
        // else if(loading && search!="" ){
        //     fetchResultsSearch();
        //     console.log("filter search")
        // }
        // else if(loading && sort!="" && search===""){
        //     fetchResultsSort();
        //     console.log("sorted movies")
        // }
        
        

    },[page,search,sort]);


    const renderedTvShows = tvShows.map((show)=>{
        return <Card key={show.id} item={show} genres={genres} openModal={handleCardClick} isMovie={false}/>;
    })

    return (
        <div className="background">
            {openModal && <Modal closeModal={handleModalClose} itemId={movieModalId} isMovie={false}/>}
            <Filters handleSort={handleSort} handleSearch={handleSearch}/>

            <main className="grid">
                {renderedTvShows}
                <div className="page-changer">
                {/* <button className="load-more" onClick={handleClick}>Load More</button> */}
                    {renderLoading()}
                </div>
            </main>
            
        </div>
        
    )
}