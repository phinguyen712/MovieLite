const 	React = require('react'),
  {connect} = require('react-redux');

import Favorites from 'Favorites';

//component for rendering view page
const User = React.createClass({
  render () {
    const {likedMovies} = this.props;
    return (
        <div className = 'view_container'>
          <Favorites likedMovies = {likedMovies}/>
        </div>
    );
  }
});


export default connect(
  (state) => {
    return {
      likedMovies:state.likedMovies
    };
  }
)(User);
