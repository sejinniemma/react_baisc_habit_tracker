import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncrease(habit);
  };

  handleDecreament = (habit) => {
    this.props.onDecrease(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => {
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.handleIncreament}
            onDecrease={this.handleDecreament}
            onDelete={this.handleDelete}
          />;
        })}
      </ul>
    );
  }
}
