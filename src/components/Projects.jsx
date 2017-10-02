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
    console.log(repoList);
  };

  render(){
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
  let repo;
  if (!state.isFetching) {
    repo = {
      name: state.name,
      link: state.link
    }
  }
  return {
    state: repo
  }
}

export default connect(mapStateToProps)(Projects);
