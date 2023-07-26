// api_key from TMDB database
const key='42f93214f05adb541fcbed21aa18c35e'

const requests = {
// Original: `https://image.tmdb.org/3/discover/tv?api_key=${key}&with_networks=213`,
NowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
Trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=1`,
Popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
TopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
UpComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
Horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
}

export default requests;
