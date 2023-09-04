import Card from "./components/Card"
import Navbar from "./components/Navbar"
import "./App.css";
import {useState,useEffect} from 'react';
import SearchMovies from "./components/Api";
export default function App(){

    
    const [movies,setMovies]= useState([]);

    useEffect(()=>{
        const fetchResult = async ()=>{
            const result =await SearchMovies();
            setMovies(result);
            console.log(movies[0].title);
        } 
        fetchResult();
    },[]);


    const renderedMovies = movies.map((movie)=>{
        return <Card key={movie.id} movie={movie}/>;
    })

    return (
        <div className="background">
            
            <Navbar/>
            <main className="grid">
                {renderedMovies}
            </main>
        </div>
        
    )
};