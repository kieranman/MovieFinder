import './Card.css'
import cardImage from './batman.jpg'
export default function Card({ movie, genres }) {
    const renderGenres = [];
    let count = 0;
  
    for (let i = 0; i < movie.genre_ids.length; i++) {
      const genreId = movie.genre_ids[i];
      const genre = genres.find((g) => g.id === genreId);
  
      if (genre) {
        renderGenres.push(<p key={genre.id}>{genre.name}</p>);
        count++;
  
        if (count === 3) {
          break;
        }
      }
    }
  
    return (
      <div className="movie-card">
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="descritpion">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="tags">{renderGenres}</div>
      </div>
    );
  }