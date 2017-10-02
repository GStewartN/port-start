import * as types from "./../constants/ActionTypes";
import fetch from "isomorphic-fetch";
import apiKey from "./../constants/apiKeys";
import v4 from "uuid/v4";

export const requestRepos = () => ({
  type: types.REQUEST_REPOS,
  repoList: []
});

export const receiveRepos = (repoList) => ({
  type: types.RECEIVE_REPOS
});

export function getRepositories(dispatch){
  return function(dispatch){
    dispatch(requestRepos());
    return fetch("https://api.github.com/user/repos?access_token=" + "apiKey").then(
      response => response.json(),
      error => console.log("ERROR OCCURED.", error)
    ).then(function(json){
      let repoList = [];
      for (var i = 0; i < json.length; i ++){
        var name = json[i].name;
        var link = json[i].html_url;
      const repo = {
        name: name,
        link: link,
        id: v4()
      }
      repoList.push(repo)
      }
      dispatch(receiveRepos(repoList));
    });
  };
}
