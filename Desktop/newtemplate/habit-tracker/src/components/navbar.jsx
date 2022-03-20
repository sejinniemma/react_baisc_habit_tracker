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
      <nav className="navbar">
        <i className="navbar-logo" class="fa-solid fa-ice-cream"></i>
        <span>Habit tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}
