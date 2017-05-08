const React = require('react');

import LikeButton from 'LikeButton';

//component for rendering list of movies
const MovieList = React.createClass({

  //change color of critic reviews
  ratingColor(rating){
    if(rating >= 6){
      return 'good_rating';
    }
    return 'bad_rating';
  },


  render(){
    const {movie} = this.props,
      posterUrl = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      viewUrl = 'https://www.themoviedb.org/movie/' + movie.id;

    const imgUrl = (movie.poster_path === null)?
    'http://www.freeiconspng.com/uploads/no-image-icon-6.png': posterUrl;

    return(
      <div className='clear medium_min_one_half'>
        <div  className='movie_list'>
          <img  className='one_half' src ={imgUrl}/>
          <div className='one_half'>
            <div className='content_container'>
              <h4>
                {movie.title}
              </h4>
              <h5>
                {movie.release_date}
              </h5>
              <h5 className = {this.ratingColor(movie.vote_average)}>
                {movie.vote_average}
              </h5>
              <div className="overview">
                {movie.overview}
              </div>
            </div>
            <div className="button_bar">
               <LikeButton movie={movie}/>
               <a href={viewUrl} target="_blank">
                 <i className="fa fa-external-link" aria-hidden="true"></i>
               </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default MovieList;
