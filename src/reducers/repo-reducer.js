import constants from "./../constants";
const { types } = constants;

const repoList = (state = [], action) => {
  let newState;
  switch (action.type){
    case types.REQUEST_REPOS:
      const { name } = action;
      newState = {
        isFetching: true,
      };
    return newState;
  case types.RECEIVE_REPOS:
    newState = Object.assign({}, state, {
      isFetching: false,
      name: action.name
    })
    return newState;
  default:
    return state;
  }
}

export default repoList;
