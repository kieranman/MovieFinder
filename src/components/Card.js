import './Card.css'
import cardImage from './batman.jpg'
export default function Card({movie}){

    const renderGenres ={};

    return(
        <div className="movie-card">
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            </div>
            <div className="descritpion">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
            <div className="tags">
                <p>Action</p>
                <p>Mystery</p>
                <p>Drama</p>
            </div>
            
        </div>
    )
}