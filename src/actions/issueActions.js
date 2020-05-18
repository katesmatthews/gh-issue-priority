import * as types from '../actions/actionTypes';

export const getIssues = (issuesURL, apiKey, repoId) => dispatch => {
  dispatch({ type: types.REQUEST_ISSUES_PENDING });
  fetch(issuesURL, {
    headers: { Authorization: `token ${apiKey}`}
  })
    .then(res => {
      if (res.status !== 200) {
        console.error('Unable to retrieve issues');
        dispatch({ type: types.REQUEST_ISSUES_FAILURE, err: res.status });
      } else return res.json();
    })
    .then(issues => {
      // Before saving the repo's issues in store, check if user previously saved an order in localStorage
      // If not, save default API ordering
      if (!window.localStorage[repoId]) {
        const issueIds = issues.map(issue => issue.id);
        window.localStorage.setItem(repoId, JSON.stringify(issueIds));
      } 
      // If an ordering is found, resort retrieved issues, respecting the order
      else {
        const savedIssueOrder = JSON.parse(window.localStorage.getItem(repoId));
        issues.sort((a, b) => {
          let aPos = savedIssueOrder.indexOf(a.id);
          let bPos = savedIssueOrder.indexOf(b.id);
          return aPos - bPos;
        });
      }
      dispatch({ type: types.REQUEST_ISSUES_SUCCESS, payload: issues });
    })
    .catch(err => dispatch({ type: types.REQUEST_ISSUES_FAILURE, err: err }));
};

export const setIssueOrder = newIssueOrder => ({
  type: types.UPDATE_ISSUES_ORDER,
  payload: newIssueOrder,
});
