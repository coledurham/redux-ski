import C from '../constants.js';

export const goal = (state, action) =>
  (action.type = C.SET_GOAL) ?
    parseInt(action.payload) :
    state

export const skiDay = (state = null, action) =>
  (action.type === C.ADD_DAY) ?
    action.payload :
    state