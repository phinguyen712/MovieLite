const 	React = require('react'),
  {connect} = require('react-redux');

import ViewButton from 'ViewButton';
import Nav from 'Nav';


const Main = React.createClass({
  render:function(){
    return (
      <div id='main_container'>
        <Nav/>
        <div id='body'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default connect()(Main);
