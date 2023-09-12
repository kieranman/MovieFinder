import './Card.css'
import {BsEmojiSmile,BsEmojiExpressionless,BsEmojiFrown,BsFillPlayFill} from 'react-icons/bs';
import { formToJSON } from 'axios';
export default function Card({ movie, genres,openModal }) {
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


    const renderScore = ()=>{
      if(movie.vote_average*10>=70){

        return<BsEmojiSmile color='green' size={25}/>;
      }
      else if(movie.vote_average*10>=60 && movie.vote_average*10<70){
        return<BsEmojiExpressionless color='orange' size={25}/>
      }
      else{
        return<BsEmojiFrown color='red' size={25}/>
      }

  }
  
    return (
      <div className="movie-card" onClick={() => openModal(movie.id)}>
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={""} />
        </div>
        <div className="descritpion">
        <div className='score'>
            {renderScore()}
            <span className="score-text">{Math.round(movie.vote_average * 10) + '%'}</span>
          </div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="tags">{renderGenres}</div>
      </div>
    );
  }