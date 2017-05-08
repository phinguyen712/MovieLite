const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');

import CategoryButton from 'CategoryButton';
import ViewButton from 'ViewButton';

const SearchForm = React.createClass({

  //searh OMDB for lists of movies or series
  searchMovie(){
    const
      url ='https://api.themoviedb.org/3/search/movie?api_key=bafdaffd163f35788949bc2d842955c3',
      {dispatch, searchCategory} = this.props,
      query = '&query=' + this.refs.searchQuery.value;

    const requestUrl = url + query + '&type=' + searchCategory;

    $.ajax({
      type: 'GET',
      url: requestUrl,
      dataType:'json',
      success:(re)=>{
        if (re.results.length === 0){
          return dispatch(actions.searchResults(false));
        }
        dispatch(actions.searchResults(re.results));
      }
    });
  },


  render () {
    const {searchCategory} = this.props;
    return(
      <div>
        <form className='search_form' onSubmit={this.searchMovie}>
            <input className='search_input'
            type='text' ref='searchQuery' />
            <button type='submit'
              className='medium_max_one_whole'>
              Search {searchCategory}
            </button>
        </form>
        <div>
          <CategoryButton activeCategory = {searchCategory}
           category = 'movie'/>
          <CategoryButton activeCategory = {searchCategory}
          category = 'series'/>
        </div>
        <ViewButton view = '/user'/>
      </div>
    );
  }
});


export default connect(
  (state)=>{
    return{
      searchCategory:state.searchCategory,
    };
  }
)(SearchForm);
