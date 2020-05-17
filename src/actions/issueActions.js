import * as types from '../actions/actionTypes';

export const getIssues = (issuesURL, apiKey) => dispatch => {
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
    .then(issues => dispatch({ type: types.REQUEST_ISSUES_SUCCESS, payload: issues }))
    .catch(err => dispatch({ type: types.REQUEST_ISSUES_FAILURE, err: err }));
};

export const setIssueOrder = newIssueOrder => ({
  type: types.UPDATE_ISSUES_ORDER,
  payload: newIssueOrder,
});
