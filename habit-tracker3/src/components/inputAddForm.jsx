import React, { PureComponent } from "react";

class InputAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="input"
          type="text"
          placeholder="Habit"
        />
        <button className="addBtn">Add</button>
      </form>
    );
  }
}

export default InputAddForm;
