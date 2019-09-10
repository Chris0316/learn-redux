import {ADD_TODO, CHANGE_DISPLAY, TOGGLE_COMPLETE} from '../actions/action-type/action-types';

//定义默认状态
let initState = {
  display: 'all',
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
  } else if (action.type === TOGGLE_COMPLETE) {
    newState = {
      //循环每一条待办，把要修改的记录更新
      todos: state.todos.map(item => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
        return item;
      })
    };
  } else if (action.type === CHANGE_DISPLAY) {
    newState = {
      display: action.payload,
      todos: [...state.todos]
    };
  } else {
    newState = state;
  }
  return newState;
}

export default reducer;