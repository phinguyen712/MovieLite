const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');



import MovieList from 'MovieList';

//component for rendering search results
const SearchResults = React.createClass({

  //render base on search sucess or fail
  renderResults(searchResults){
    if(searchResults){
      return this.renderMovieLists(searchResults);
    }else{
      return <h3>Your movie does not exist</h3>;
    }
  },

  //renders sucess
  renderMovieLists(searchResults){
    return (
      searchResults.map((movie)=>{
        const key = uuid();
        return(
            <MovieList key={key}  movie={movie}/>
        );
      })
    );
  },


  render () {
    const {searchResults} = this.props;

    return(
      <div className = 'search_results'>
        {this.renderResults(searchResults)}
      </div>
    );
  }
});


export default connect(
  (state)=>{
    return{
      searchResults:state.searchResults,
    };
  }
)(SearchResults);
