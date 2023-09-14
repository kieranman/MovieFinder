import './Card.css'
import {BsEmojiSmile,BsEmojiExpressionless,BsEmojiFrown} from 'react-icons/bs';
import { formToJSON } from 'axios';
export default function Card({ item, genres,openModal,isMovie }) {
    const renderGenres = [];
    const title = isMovie ? item.title : item.name;
    const overview = item.overview;
    const posterPath = item.poster_path;



    let count = 0;
  
    for (let i = 0; i < item.genre_ids.length; i++) {
      const genreId = item.genre_ids[i];
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
      if(item.vote_average*10>=70){

        return<BsEmojiSmile color='green' size={25}/>;
      }
      else if(item.vote_average*10>=60 && item.vote_average*10<70){
        return<BsEmojiExpressionless color='orange' size={25}/>
      }
      else{
        return<BsEmojiFrown color='red' size={25}/>
      }

  }
  
    return (
      <div className="movie-card" onClick={() => openModal(item.id)}>
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={""} />
        </div>
        <div className="descritpion">
        <div className='score'>
            {renderScore()}
            <span className="score-text">{Math.round(item.vote_average * 10) + '%'}</span>
          </div>
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
        <div className="tags">{renderGenres}</div>
      </div>
    );
  }