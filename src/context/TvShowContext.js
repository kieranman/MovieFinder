import {createContext, useState} from 'react';
import axios from 'axios';


const TvShowContext = createContext();

function TvShowProvider({children}){
    
    const fetchTvShows = async (page) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,{
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
        const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?language=en`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },
            // params:{
            //     query: term
            // }
        });
        return response.data.genres;
    };

    const fetchTvShowVideo = async (showId) => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US'`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },

        });
        

        return response.data.results;
    }

    const fetchSortedTvShows = async (page,sort) => {
        switch(sort){
            case "popularity": sort="popularity.desc"
                break; 
            case"score":  sort="vote_count.desc"
                break
            case"latest": sort= "primary_release_date.desc"
                break
            default: sort="";
        }
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=${sort}`,{
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

    const fetchTvShowByTitle = async(page,search) =>{
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=${page}`,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjM4NGUwZGJhZWE5YjhhYTRhMThmYWI3Y2NiNjNhZiIsInN1YiI6IjY0ZjViNDNiZTBjYTdmMDE0ZjZjNTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYzICKyrxkPS8rLbwYGnELXw3GcTefn00dp6gOBBDIE',
                accept: 'application/json'
            },
        });
        return response.data.results;
    }
    const fetchTvShowByGenre = async (page,genre) => {

        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,{
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

    const valueToShare ={
        fetchTvShows,
        fetchGenres,
        fetchTvShowVideo,
        fetchSortedTvShows,
        fetchTvShowByTitle,
        fetchTvShowByGenre
    };

    return <TvShowContext.Provider value={valueToShare}>{children}
    </TvShowContext.Provider>
}
export {TvShowProvider};
export default TvShowContext ;