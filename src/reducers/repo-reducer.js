import constants from "./../constants";
const { types } = constants;

const repoList = (state = [], action) => {
  let newState;
  switch (action.type){
    case types.REQUEST_REPOS:
      newState = {
        isFetching: true,
      };
    return newState;
  case types.RECEIVE_REPOS:
    newState = {
      isFetching: false,
    };
    return newState;
  default:
    return state;
  }
}

export default repoList;
