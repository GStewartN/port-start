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
    this.props.dispatch(getRepositories(repoList));
  };

  render(){
    console.log(this.props.state);
    return (
      <div>
        <div>
          <button onClick={this.clickHandler}>Show Github Repos</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const repoList = state.repoList;
  if (!state.isFetching) {
    const repo = {
      name: state.name,
      link: state.link
    }
  }
  return {
    state: repoList
  }
}

export default connect(mapStateToProps)(Projects);
