import React, { Component } from "react";
import Habit from "./habit";
import InputAddForm from "./inputAddForm";

class Habits extends Component {
  handleIncrease = (habit) => {
    this.props.onIncrease(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecrease(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <InputAddForm onAdd={this.handleAdd} />
        <ul className="container">
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              count={habit.count}
              onIncrease={this.handleIncrease}
              onDecrease={this.handleDecrease}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Habits;
