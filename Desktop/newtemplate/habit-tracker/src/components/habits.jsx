import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

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

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
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
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}
