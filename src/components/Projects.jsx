import React from "react";
import { getRepositories } from "./../actions";
import repoList from "./../reducers/index";
import { connect } from "react-redux";

class Projects extends React.Component {

  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event){
    event.preventDefault();
    this.props.dispatch(getRepositories());
  };

  render(){
    return (
      <div>
        <div>
          <button onClick={this.clickHandler}>Show Github Repos</button>
          <p>{this.props.state.name}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let info;
  if (!state.isFetching) {
    info = {
      name: state.name,
    }
  }
  return {
    state: info
  }
}


export default connect(mapStateToProps)(Projects);
