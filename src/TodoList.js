import React from 'react';
import Table from './Submit.js';

  
class Incomplete extends React.Component {
  render () {

    return (
    <div>
      <input type="text" class="todolist" placeholder="Your todo list."></input>
      <Table />
    </div>
    );
  }
}

export default Incomplete;