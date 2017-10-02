import constants from "./../constants";
const { types } = constants;

const repoList = (state = [], action) => {
  let newState;
  switch (action.type){
    case types.REQUEST_REPOS:
      newState = {
        isFetching: true,
        repoList: []
      };
    return newState;
  case types.RECEIVE_REPOS:
    newState = {
      isFetching: false,
      repoList
    };
    return newState;
  default:
    return state;
    console.log(newState);
  }
}

export default repoList;
