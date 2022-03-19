import React, { Component } from "react";

export default class Habit extends Component {
  handleIncreament = () => {
    this.props.onIncrease(this.props.habit);
  };

  handleDecreament = () => {
    this.props.onDecrease(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fa-solid fa-face-smile-beam"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fa-solid fa-face-flushed"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}
