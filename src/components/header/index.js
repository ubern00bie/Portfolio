import React from 'react';

const Header = () => {
return(
  
  <nav class="row">
    <nav class="col">
      <header>   
        <h1 id="navbar">Software Developer</h1>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </nav>
  </nav>
  );
}

export default Header;
