import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      // <div className="topnav">
      //   <a className="active" href="/">
      //     Home
      //   </a>
      //   <a href="/todo">Todos</a>
      //   <a href="/about">About</a>
      // </div>
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/todo">
          Todos
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    );
  }
}

export default Nav;
