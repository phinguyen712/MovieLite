const 	React = require('react'),
  moment = require('moment'),
  actions = require('actions'),
  uuid = require('uuid/v1'),
  {connect} = require('react-redux');

import key from 'key';
import MovieList from 'MovieList';
//component for rendering home page
const Discover = React.createClass({
  componentWillMount(){
    const
      url ='https://api.themoviedb.org/3/discover/movie?',
      {dispatch} = this.props,
      apiKey = 'api_key=' + key,
      from = '&primary_release_date.lte=' + moment().format('YYYY-MM-DD'),
      to = '&primary_release_date.gte=' + moment().subtract(4, 'weeks').format('YYYY-MM-DD'),
      sort = '&sort_by=popularity.desc',
      language = '&region=us&language=en-US';

    const requestUrl = url + apiKey + from + to + sort + language;
    $.ajax({
      type: 'GET',
      url: requestUrl,
      dataType:'json',
      success:(re)=>{
        dispatch(actions.addMoviesInTheatre(re.results));
      }
    });
  },

  renderMovieLists(){
    const {inTheatre} = this.props;

    return (
      inTheatre.map((movie)=>{
        const key = uuid();
        return(
            <MovieList key={key}  movie={movie}/>
        );
      })
    );
  },


  render () {
    return (
        <div className = 'view_container'>
          <h1>Now Playing</h1>
          {this.renderMovieLists()}
        </div>
    );
  }
});

export default connect(
  (state)=>{
    return{
      inTheatre:state.inTheatre,
    };
  }
)(Discover);
