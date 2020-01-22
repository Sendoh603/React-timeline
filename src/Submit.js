import React from 'react';


class Table extends React.Component {
  constructor(props) {
    super(props);
      this.state = {value:"",secondvalue:""};
      this.addInputContext = this.addInputContext.bind(this);
  }
   addInputContext () {
    this.setState({value:document.querySelector(".todolist").value})
    document.querySelector(".todolist").value = ""
  }
  render () {  
    return (
      <div>
        <button onClick={this.addInputContext}>Submit</button>
        <div>To do list:</div>
        <div class="content">{this.state.value}</div>
        <button onClick={() =>this.setState({secondvalue:document.querySelector(".content").innerText}) }>Add to complete</button>
        <button onClick={() =>this.setState({value:""})}>Delete</button>
        <div>Complete list</div>
        <div>{this.state.secondvalue}</div>
      </div>
    )
  }
}
export default Table;