import repoList from "./../../src/reducers/repo-reducer";
import c from "./../../src/constants";

describe("Repo reducer", () => {
  let action;
  const repoList = {[
    name: "AMA",
    id: 0
  ]};

  test("should return equivalent state if no action type is recognized", () => {
    expect(repoList([], { type: null
    })).toEqual([]);
  });

});
