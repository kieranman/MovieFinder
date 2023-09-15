import Card from "../components/Card.js"
import {useState,useEffect,useContext} from 'react';
import './MoviePage.css'
import BeatLoader from 'react-spinners/BeatLoader.js'
import Modal from "../components/Modal.js";
import Filters from "../components/Filters.js";
import TvShowContext from "../context/TvShowContext.js";
export default function MoviePage(){
    const {fetchTvShows,fetchGenres,fetchSortedTvShows,fetchTvShowByTitle,fetchTvShowByGenre} = useContext(TvShowContext);

    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [tvShows,setTvShows]= useState([]);
    const [loading,setLoading] = useState(true);
    const [openModal,setOpenModal] = useState(false);
    const [tvShowModalId,setTvShowModalId] = useState();
    const [search,setSearch] = useState("");
    const [sort,setSort] = useState("");
    const [genreFilter,setGenreFilter]= useState("");
    
    // pagination
    const handleClick =() =>{
        setLoading(true);
        setPage(page + 1);
        setTimeout(() => {
            setLoading(false);
          }, 1000);
    };

    // handles modal close and open for cards
    const handleCardClick = (tvShowId)=>{
        setTvShowModalId(tvShowId);
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

    const fetchResultsSort = async ()=>{
        const result =await fetchSortedTvShows(page,sort);
        // setMovies(result);
        setTimeout(() => {
            setTvShows(pre=>[...pre,...result]);
            setLoading(false); // Hide the loader after 2 seconds
          }, 700);
    } 

    const fetchResultsSearch = async ()=>{
        const result =await fetchTvShowByTitle(page,search);
        setTimeout(() => {
            setTvShows(pre=>[...pre,...result]);
            setLoading(false); // Hide the loader after 2 seconds
          }, 700);
    }
    
    const fetchResultFilterGenre = async ()=>{
        const result =await fetchTvShowByGenre(page,genreFilter);
        // setMovies(result);
        setTimeout(() => {
            setTvShows(pre=>[...pre,...result]);
            setLoading(false); // Hide the loader after 2 seconds
          }, 700);
    } 

    // Search functionality
    const handleSearch = (input)=>{
        setLoading(true);
        setTvShows([])
        setPage(1);
        setSearch(input);
    }

    const handleSort = (input) =>{
        setLoading(true);
        setTvShows([])
        setSort(input);
        setSearch("");
        setPage(1);
        
    }
    const handleFilterGenre = (input) =>{
        console.log(input);
        setLoading(true);
        setTvShows([])
        setGenreFilter(input)
        setSort("");
        setSearch("");
        setPage(1);
        
    }


    useEffect(() => {
        if (genres.length === 0) {
          fetchResultGenres();
        }
        if (sort === "" && search === "" && genreFilter==="" && loading) {
          fetchResultTvShows();
          console.log("normal");
        } else if (loading && search !== "") {
          fetchResultsSearch();
          console.log("search");
        } else if (loading && sort !== "" && search === "") {
          fetchResultsSort();
          console.log("sort");
        } else if (loading && genreFilter !== "") {
          fetchResultFilterGenre();
          console.log("genre");
        }
      }, [page, search, sort, genreFilter]);


    const renderedTvShows = tvShows.map((show)=>{
        return <Card key={show.id} item={show} genres={genres} openModal={handleCardClick} isMovie={false}/>;
    })

    return (
        <div className="background">
            {openModal && <Modal closeModal={handleModalClose} itemId={tvShowModalId} isMovie={false}/>}
            <Filters handleSort={handleSort} handleSearch={handleSearch} handleFilterGenre={handleFilterGenre} genres={genres}/>

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