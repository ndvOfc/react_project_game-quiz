import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark navcolor">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/stats">Stats</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile">Profile</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
