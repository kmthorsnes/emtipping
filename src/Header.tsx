const Header = () => {
  return (
    <header>
      <div className="flex gap-4">
        {/* TODO: Få inn noe fett her  - kanskje fifa 98-tema?   */}
{/* TODO: Fin paletten til mesterskapet */}
        <p>Dette er min header</p>
        <p>
          <a href="/forside">Forside</a>
        </p>
        <p>
          <a href="/kamper">Kamper</a>
        </p>
        <p>
          <a href="/resultater">Resultater</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
