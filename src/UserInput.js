import React, { Component } from "react";

// Stateful component
class UserInput extends Component {
  state = {
    name: ""
  };

  updateName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addName(this.state.name);
    // set value of input back to empty string
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          class="inputName"
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
