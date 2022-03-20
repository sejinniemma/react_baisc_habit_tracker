import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits(index).count++;
    this.setState({ habits });
  };

  handleDecreament = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
  return  <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <Habits
        habits={this.state.habits}
        onIncreament={this.handleIncreament}
        onDecrement={this.handleDecreament}
        onDelete={this.handleDelete}
      />
    </>
  };
}

export default app;

export default App;
