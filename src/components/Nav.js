import React, { Link } from 'react-router-dom';

const Nav = () => { //eslint-disable-line

  return (
    <div className="navBar">
      <ul className="navLinks">
        <h3 className="navItem">SollyBooks</h3>
        <h3 className="navItem"><Link to="/books">Books</Link></h3>
        <h3 className="navItem"><Link to="/categories">Categories</Link></h3>
      </ul>
      <i className="fa-regular fa-person" />
    </div>
  );
};

export default Nav;
