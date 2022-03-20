import React, { Component } from "react";

export default class Navbar extends Component {
  totalCount = () => {
    const totalCountArray = [];
    this.props.habits.filter((habit) => {
      if (habit.count > 0) {
        totalCountArray.push(habit);
      }
    });

    return totalCountArray.length;
  };

  render() {
    return (
      <nav>
        <i className="fa-solid fa-ice-cream"></i>
        <span>Habit tracker</span>
        <span>{this.props.totalCount}</span>
      </nav>
    );
  }
}
