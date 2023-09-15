import './Filters.css';
import { useState } from 'react';
import {BiSearchAlt,BiFilterAlt,BiSolidSortAlt} from "react-icons/bi";
export default function Filters({handleSearch,handleSort,genres,handleFilterGenre}){
    const [search,setSearch] = useState(false);
    const [title,setTitle] = useState("");
    const [dropdown,setDropDown]= useState(false)
    const [showGenres,setShowGenres] = useState(false);

    // const showTags=()=>{

    // }

    const handleShowSearch =()=>{
      setSearch(!search);
    }

    const handleChange = (event)=>{
      setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
      event.preventDefault();
      handleSearch(title);
    }
    const handleShowDropDown = ()=>{
      setDropDown(!dropdown);
    }

    const handleShowGenres = ()=>{
      setShowGenres(!showGenres);
    }

    return(
      <ul className='filters-box'>
        <li>
          <div className="search-bar-container">
            <a><BiFilterAlt className='filter-icon' onClick={handleShowGenres}/>
              {showGenres &&<div className='dropdown'>
                  <ul onMouseLeave={handleShowGenres}>
                    {genres.map((genre)=>(
                      <li key={genre.id} onClick={() => handleFilterGenre(genre.id)}>{genre.name}</li>
                    ))}
                  </ul>
                </div>}
            </a>
            <a><BiSolidSortAlt className='sort-icon' onClick={handleShowDropDown}/>
              {dropdown &&<div className='dropdown'>
                <ul onMouseLeave={handleShowDropDown}>
                  <li onClick={() => handleSort('popularity')}>Popularity</li>
                  <li onClick={() => handleSort('score')}>Score</li>
                  <li onClick={() => handleSort('latest')}>Latest</li>
                </ul>
              </div>}
            </a>
            <a onClick={handleShowSearch}><BiSearchAlt className='search-icon'/></a>
            {search && 
              <form onSubmit={handleSubmit}>
                <div className="search-box-container">
                  <input 
                    onChange={handleChange} 
                    value={title} 
                    className="search-box" 
                    placeholder="Search" 
                  />
                </div>
              </form>
            }
          </div>
        </li>
      </ul>

    )
}