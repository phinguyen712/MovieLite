
import * as redux from 'redux';
import {searchResultsReducer,
        likedMoviesReducer,
        searchHistoryReducer,
        searchCategoryReducer,
        inTheatreReducer
      } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchResults: searchResultsReducer,
    likedMovies: likedMoviesReducer,
    searchHistory: searchHistoryReducer,
    searchCategory: searchCategoryReducer,
    inTheatre:inTheatreReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
  // for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
