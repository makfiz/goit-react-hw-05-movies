import axios from 'axios';

const API_KEY = 'e4c439da3c1d90110fb4595b6236c9fe';
const language = 'en'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



 export const fetchTrendingMovies = async (page = 1, signal) => {
    try {

      const { data } = await axios('trending/movie/day', {
        signal,
        params: {
          api_key: API_KEY,
          language: language,
          page: page,
        },
      });
    
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

 export const  fetchSearchMovie = async (searchQuery, signal) => {
    try {
    
      const { data } = await axios('search/movie', {
        signal,
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: language,
          page: 1,
        },
      });
     

    //   if (this.searchQuery === '') {
    //     return;
    //   }
    //   this.total_pages = data.total_pages;

      return data.results;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  export const  fetchSearchMovieById = async (id) => {
    try {
    
      const { data } = await axios(`movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: language,
        },
      });
      

      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

   export const  fetchMovieCreditshById = async (id) => {
    try {
    
      const { data } = await axios(`movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
          language: language,
        },
      });
      

      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

   export const  fetchMovieReviewsById = async (id) => {
    try {
    
      const { data } = await axios(`movie/${id}/reviews`, {
        params: {
          api_key: API_KEY,
          language: language,
        },
      });
      

      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }






