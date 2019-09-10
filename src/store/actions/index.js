import {ADD_TODO} from './action-type/action-types';
import {TOGGLE_COMPLETE} from "./action-type/action-types";

let actions = {
  addTodo: function(payload) {
    return {type: ADD_TODO, payload};
  },
  toggleComplete: function(payload) {
    return {type: TOGGLE_COMPLETE, payload};
  }
};

export default actions;//导出ActionCreators