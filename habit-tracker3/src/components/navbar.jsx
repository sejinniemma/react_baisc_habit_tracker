import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <span className="title">Habit tracker</span>
        <span className="icon">
          <i class="fas fa-dog"></i>
        </span>
        <span className="totalCount">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
