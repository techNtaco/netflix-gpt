export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"

export const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/192803746"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  }

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?page=2'
export const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming?&page=1'


export const getTrailerApiUrl = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hindi", name: "Hindi"}, {identifier: "esp", name: "Spanish"}]

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY

export const MOVIE_SEARCH_API = "https://api.themoviedb.org/3/search/movie"

const getMovieSearchApiUrl = (query) => {
  const baseUrl = MOVIE_SEARCH_API
  const params = new URLSearchParams({
    query: query,
    include_adult: "false",
    language: "en-US",
    page: "1",
  });

  return `${baseUrl}?${params.toString()}`;
};