const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="flex">
        <p>Dette er min footer</p>
        {/* TODO: Få inn siste oppdatering. Kanskje det er siste fetch? */}
        <p>Sist oppdatert: </p>
      </footer>
    </>
  );
};

export default Footer;
