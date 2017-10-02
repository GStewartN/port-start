import constants from "./../constants";
const { types } = constants;

const repoList = (state = [], action) => {
  let newState;
  switch (action.type){
    case types.REQUEST_REPOS:
      newState = action.repoList;
    return newState;
  case types.RECEIVE_REPOS:
    newState = action.repoList;
    return newState;
  default:
    return state;
  }
}

export default repoList;
