//  actions for calling reducers
export const addMoviesInTheatre = (movies) => {
  return {
    type: 'ADD_MOVIES_IN_THEATRES',
    movies
  };
};

export const searchResults = (searchResults) => {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    searchResults
  };
};

export const addLikeMovie = (movie) => {
  return {
    type: 'ADD_LIKE_MOVIE',
    movie
  };
};

export const removeLikeMovie = (index) => {
  return {
    type: 'REMOVE_LIKE_MOVIE',
    index
  };
};

export const addSearchHistory = (query) => {
  return {
    type: 'ADD_SEARCH_HISTORY',
    query
  };
};

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_SEARCH_CATEGORY',
    category
  };
};
