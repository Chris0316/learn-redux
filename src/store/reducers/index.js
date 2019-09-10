import {ADD_TODO} from '../actions/action-type/action-types';

//定义默认状态
let initState = {
  todos: [
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习redux'
    }, {
      id: parseInt(Math.random() * 10000000),
      isComplete: true,
      title: '学习react'
    }, {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习node'
    }
  ]
};

function reducer(state = initState, action) {
  let newState;
  if (action.type === ADD_TODO) {
    newState = {
      todos: [
        ...state.todos,
        action.payload
      ]
    };
  } else {
    newState = state;
  }
  return newState;
}

export default reducer;