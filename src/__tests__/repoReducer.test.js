import repoReducer from '../reducers/repoReducer';
import * as types from '../actions/actionTypes';

describe('repoReducer tests', () => {
  
  let state;

  beforeEach(() => {
    state = {
      id: 1234,
      list: [6, 8, 1],
      isPending: false,
    }
  });

  describe('SET_SELECTED_REPO action', () => {
    const action = {
      type: types.SET_SELECTED_REPO,
      payload: 42,
    };
    it('should update state with new id', () => {
      const newState = repoReducer(state, action);  
      expect(newState.repoId).toBe(action.payload);
    });
    it('should not mutate original state', () => {
      repoReducer(state, action);  
      expect(state.id).toBe(1234);
    });
  });

  describe('invalid actions', () => {
    const invalidAction = {
      type: 'invalid',
    }
    it('should return the same state object', () => {
      const newState = repoReducer(state, invalidAction);  
      expect(newState).toBe(state);
    })
  });
});
