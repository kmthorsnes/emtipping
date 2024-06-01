import Fifa98Banner from "./assets/fifa-98-banner.png";
const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <a href="/forside">Forside</a>
            </li>
            <li>
              <a href="/kamper">Kamper</a>
            </li>
            <li>
              <a href="/resultater">Resultater</a>
            </li>
          </ul>
        </nav>
        <img className="banner" src={Fifa98Banner} />
      </div>
      <div className="flex gap-4">
        {/* TODO: Få inn noe fett her  - kanskje fifa 98-tema?   */}
        {/* TODO: Fin paletten til mesterskapet */}
        <h1 className="fifa-font">EM-tipping 2024</h1>
      </div>
    </header>
  );
};

export default Header;
