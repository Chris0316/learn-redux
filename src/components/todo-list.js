import React from 'react';
import {connect} from 'react-redux';
import actions from "../store/actions";

class TodoList extends React.Component {
  todoChange = (event) => {
    //当onChange事件发生时，调用toggleComplete动作
    this.props.toggleComplete(parseInt(event.target.value));
  };

  filterDisplay() {
    return this.props.todos.filter(item => {
      switch (this.props.display) {
        case 'completed':
          return item.isComplete;
        case 'uncompleted':
          return !item.isComplete;
        case 'all':
        default:
          return true;
      }
    });
  }

  getTodos = () => {
    return this.filterDisplay().map((todo, index) => {
      return <li key={index}>
        <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/>
        {
          todo.isComplete ? <del>{todo.title}</del> : <span>{todo.title}</span>
        }
        <button type="button" data-id={todo.id}>删除</button>
      </li>;
    });
  };

  render() {
    return <ul>
      {this.getTodos()}
    </ul>
  }
}

export default connect((state) => ({
  ...state
}), actions)(TodoList);