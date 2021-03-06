import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoHeader extends Component {
  //取得未完成的todo数量
  getUnfinishedCount() {
    //this.props.todos就是从connect传入的state数据
    return this.props.todos.filter((i) => {
      return i.isComplete === false;
    }).length;
  }
  render() {
    return (<div>
      <div>您有{this.getUnfinishedCount()}件事未完成</div>
      <div>待办项<input /><button>添加</button></div>
    </div>);
  }
}

export default connect((state) => ({
  ...state
}))(TodoHeader);