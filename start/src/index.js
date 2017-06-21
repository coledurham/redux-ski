import C from './constants.js';
import { skiDay } from './store/reducers.js';

const state = null;

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Kirkwood",
    "date": "2016-12-7",
    "powder": true,
    "backcountry": false
  }
};

const nextState = skiDay(state, action);

console.log(`
  initial state: ${state}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}
  `);
