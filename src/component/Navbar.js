import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="myNavBgColor">
      <nav class=" navbar navbar-expand-lg navbar-light  myNav">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/login">
                Login <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>

        <form className="form-inline">
          <div className="theme-options">
            <div id="theme-dark"  onClick={props.handleTheme}/>
            <div id="theme-light"  onClick={props.handleTheme}/>
          </div>
        </form>
      </nav>
    </div>
  );
}
