import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Forside</Link>
            </li>
            <li>
              <Link to="/kamper">Kamper</Link>
            </li>
            <li>
              <Link to="/resultater">Resultater</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* TODO: Få inn noe fett her  - kanskje fifa 98-tema?   */}
      {/* TODO: Fin paletten til mesterskapet */}
    </header>
  );
};

export default Header;
