const api_key=process.env.REACT_APP_API_KEY

 export default{

    fetchNowPlaying:`/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchActionMovies:`discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchNetflixOrginals:`/discover/movie?api_key=${api_key}&with_genres=215`,
    fetchAnime:`/discover/tv?api_key=${api_key}&sort_by=popularity.desc`  ,
 }