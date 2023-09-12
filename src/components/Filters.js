import './Filters.css';
import { useState } from 'react';
import {BiSearchAlt,BiFilterAlt} from "react-icons/bi";
export default function Filters({handleSearch}){
    const [showSearch,setShowSearch] = useState(false);
    const [title,setTitle] = useState("");

    const handleShowSearch =()=>{
        setShowSearch(!showSearch);
    }

    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        handleSearch(title);
    }
  

    return(
        <ul className='filters-box'>
        <li>
          <a><BiFilterAlt/></a>
          <a onClick={handleShowSearch}><BiSearchAlt/></a>
          <div className="search-bar-container">
            {showSearch && 
                    <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange} value={title} 
                        className={`search-box ${showSearch ? 'active' : ''}`}></input>
                    </form>
            }
          </div>
        </li>
      </ul>
    )
}