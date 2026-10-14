const API_KEY = "24e18a8bcf01cab4a920c0021bba9d9a";
const BASE_URL = "https://api.themoviedb.org/3";

const getPopularMovies = async() => {
  try{
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    
    checkFetchStatus(res);

    const resData = await res.json();
    return resData.results;
  } catch(err){
    renderError(err)
  }
}

const searchMovies = async(searchQuery) => {
  try{
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`);

    
    checkFetchStatus(res);
     const resData = await res.json();
     return resData.results;
  } catch(err){
    renderError(err);
  }
}

const checkFetchStatus = (res) => {
  if(!(res.status >= 200 && res.status < 300)){
      renderError(res.status);
    }
}
const renderError = (err) => {
  alert(`Failed to load movies. Try again. ${err ? err : ""}`)
}

export { getPopularMovies, searchMovies };