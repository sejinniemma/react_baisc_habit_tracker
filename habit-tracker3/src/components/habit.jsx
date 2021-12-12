import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrease = () => {
    this.props.onIncrease(this.props.habit);
  };

  handleDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name } = this.props.habit;
    const { count } = this.props;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrease}
        >
          <i class="fas fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrease}
        >
          <i class="fas fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
