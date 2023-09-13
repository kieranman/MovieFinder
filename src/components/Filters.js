import './Filters.css';
import { useState } from 'react';
import {BiSearchAlt,BiFilterAlt} from "react-icons/bi";
export default function Filters({handleSearch}){
    const [search,setSearch] = useState(false);
    const [title,setTitle] = useState("");
    const [dropdown,setDropDown]= useState(false)

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

    return(
    <ul className='filters-box'>
      <li>
        <div className="search-bar-container">
          <a><BiFilterAlt onClick={handleShowDropDown}/>
            {dropdown &&<div className='dropdown'>
              <ul>
                <li>Popularity</li>
                <li>Score</li>
                <li>Latest</li>
              </ul>
            </div>}
          </a>
          <a onClick={handleShowSearch}><BiSearchAlt/></a>
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