import React, { Component } from "react";

export default class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = () => {
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" ref={this.inputRef} onSubmit={this.onSubmit}>
        <input type="text" name="" id="" className="add-input" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
