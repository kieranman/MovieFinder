import axios from 'axios';


const SearchMovies = async (term) => {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
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


export default SearchMovies;