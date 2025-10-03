const API_Key = "6e20c0283eb6eb3a76c36a803270bd8c";

const BAse_url = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>{       // foe await /wait for a moment after searching 
     const response = await fetch(`${BAse_url}/movie/popular?api_key=${API_Key}`);
     const data = await response.json();
     return data.results
}

export const searchMovies = async ({query}) =>{       // foe await /wait for a moment after searching 
     const response = await fetch(`${BAse_url}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(query)}`);
     const data = await response.json();
     return data.results;
}