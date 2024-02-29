import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h1>Santhosh mani</h1>
        <nav>
          <button className="mobile">
            <span className="material-icons">menu</span>
          </button>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#reviews">Reviews</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
