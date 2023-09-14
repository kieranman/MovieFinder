import {createContext, useState} from 'react';
import axios from 'axios';


const MovieContext = createContext();

function MovieProvider({children}){
    

    const fetchMoviesByTitle = async(page,search) =>{
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },
        });
        return response.data.results;
    }


    const fetchMovies = async (page) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },
            // params:{
            //     query: term
            // }
        });
        return response.data.results;
    };
    const fetchSortedMovies = async (page,sort) => {
        switch(sort){
            case "popularity": sort="popularity.desc"
                break; 
            case"score":  sort="vote_count.desc"
                break
            case"latest": sort= "primary_release_date.desc"
                break
            default: sort="";
        }
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },
            // params:{
            //     query: term
            // }
        });
        return response.data.results;
    };

    const fetchGenres = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en',{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },

        });
        

        return response.data.genres;
    };

    
    const fetchMovieVideo = async (movieId) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },

        });
        

        return response.data.results;
    };

    const valueToShare ={
        fetchMovies,
        fetchGenres,
        fetchMovieVideo,
        fetchMoviesByTitle,
        fetchSortedMovies
    };

    return <MovieContext.Provider value={valueToShare}>{children}
    </MovieContext.Provider>
}
export {MovieProvider};
export default MovieContext ;