import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: null,
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
