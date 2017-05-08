const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');



//component for rendering list of movies
const LikeButton = React.createClass({

  //I/O for liked button
  buttonColor(movie, hasLiked){
    if ( hasLiked !== -1 ){
      return 'fa fa-heart';
    }
    return 'fa fa-heart-o';
  },


  toggleLike(movie,hasLiked){
    const {dispatch} = this.props;
    if(hasLiked !== -1){
      dispatch(actions.removeLikeMovie(hasLiked));
    }else{
      dispatch(actions.addLikeMovie(movie));
    }
  },


  render(){
    const {movie, likedMovies} = this.props;
    let hasLiked = -1;
    //Determine if this Movie is in our likedMovies reducer
    if(likedMovies){
      const likedMoviesID = likedMovies.map((likedMovie)=>{
        return likedMovie.id;
      });
      hasLiked = likedMoviesID.indexOf(movie.id);

    }

    return(
      <i className={this.buttonColor(movie,hasLiked)}
        onClick={()=>this.toggleLike(movie,hasLiked)}
      >
      </i>

    );
  }
});


export default connect(
  (state)=>{
    return{
      likedMovies:state.likedMovies,
    };
  }
)(LikeButton);
