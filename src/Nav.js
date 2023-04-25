import { NavLink } from "react-router-dom"
import "./Nav.css";

/** Presentational component for Navbar.
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * {App} -> Nav
 */

function Nav({dogs}) {
  return (
    <div className="Nav">
      <NavLink to="/dogs" end>Home</NavLink>
      {dogs.map(dog => {
        return (
          <NavLink to={`dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>
        );
      })}
    </div>
  );
}

export default Nav;