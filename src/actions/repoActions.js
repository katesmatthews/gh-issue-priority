import * as types from './actionTypes';

export const getRepos = apiKey => dispatch => {
  dispatch({ type: types.REQUEST_REPOS_PENDING });
  fetch('https://api.github.com/user/repos', {
    headers: { Authorization: `token ${apiKey}` }
  })
    .then(res => {
      if (res.status !== 200) {
        return dispatch({ type: types.REQUEST_REPOS_FAILURE, payload: res.status });
      } else return res.json()
    })
    .then(repos => {
      dispatch({ type: types.REQUEST_REPOS_SUCCESS, payload: repos });
    })
    .catch(err => {
      console.error('Error retrieving repos:', err)
      dispatch({ type: types.REQUEST_REPOS_FAILURE, payload: err });
    });
}

export const setSelectedRepo = repoId => ({
  type: types.SET_SELECTED_REPO,
  payload: repoId,
});
