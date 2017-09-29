import * as types from "./../constants/ActionTypes";
import fetch from "isomorphic-fetch";
import apiKey from "./../constants/apiKeys";
import v4 from "uuid/v4";

export const requestRepos = () => ({
  type: types.REQUEST_REPOS
});

export const receiveRepos = () => ({
  type: types.RECEIVE_REPOS
});

export function getRepositories(dispatch){
  return function(dispatch){
    const localRepoId = v4();
    dispatch(getRepositories());
    return fetch("https://api.github.com/user/repos?access_token=" + "apiKey").then(
      response => response.json(),
      error => console.log("ERROR OCCURED.", error)
    ).then(function(json){
      if (json.name){
        console.log(json.name);
        dispatch(receiveRepos());
      } else {
        console.log("NO DICE");
      }
    })
  }
}
