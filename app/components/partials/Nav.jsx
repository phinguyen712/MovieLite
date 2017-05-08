const React = require('react'),
  {Link, IndexLink} = require('react-router');

//component for rendering list of movies
const Nav = React.createClass({
  render(){
    return(
      <div id='nav_bar'>
          <ul className = 'nav_menu'>
            <li><IndexLink to="/"  activeStyle={{backgroundColor:'#b6bea8', color:'white'}}>Now Playing</IndexLink></li>
            <li><Link to="/search" activeStyle={{backgroundColor:'#b6bea8', color:'white'}}>Search</Link></li>
            <li><Link to="/user"activeStyle={{backgroundColor:'#b6bea8', color:'white'}}>Favorites</Link></li>
          </ul>
      </div>
    );
  }
});

export default Nav;
